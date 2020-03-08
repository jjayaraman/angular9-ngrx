import { CountryService } from './../../../service/country.service';
import { Component, OnInit } from '@angular/core';
import Country from 'src/app/model/Country';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { list } from './../../../store/action/region.action'
import { countriesByRegion, countriesByRegionLoaded } from './../../../store/action/country.action'

/**
 * Home container component which holds all the other child components
 * 
 * @author Jayakumar Jayaraman
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regions$: Observable<Array<object>>
  countries$: Observable<Array<object>>
  countries: object[]
  selectedRegion: string
  selectedCountry: Country

  constructor(
    private store: Store<{ regions: Array<object>, countries: Array<object> }>) {
  }


  ngOnInit(): void {
    this.regions$ = this.store.pipe(select('regions'))
    this.countries$ = this.store.pipe(select('countries'))
  }

  // Region dropdown change event
  regionOnChange(event) {
    this.selectedRegion = event.value
    this.selectedCountry = null // Clears previously loaded values
    let region = { 'region': this.selectedRegion } // input for API
    this.store.dispatch(countriesByRegion(region)); // ngrx dispatch to load countries by selected region
  }

  // Country dropdown change event
  countryOnChange(event) {
    this.selectedCountry = event.value
  }


}
