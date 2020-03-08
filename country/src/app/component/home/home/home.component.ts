import { CountryService } from './../../../service/country.service';
import { Component, OnInit } from '@angular/core';
import Country from 'src/app/model/Country';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { list } from './../../../store/action/region.action'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regions$: Observable<Array<object>>
  countries: object[]
  selectedRegion: string
  selectedCountry: Country

  constructor(private countryService: CountryService, private store: Store<{ regions: object[] }>) {
  }


  ngOnInit(): void {
    this.regions$ = this.store.pipe(select('regions'))
  }


  regionOnChange(event) {
    this.selectedRegion = event.value
    this.selectedCountry = null
    this.countryService.getCountriesByRegion(event.value)
      .then(res => {
        this.countries = res
      }).catch(err => {
        console.log(err); // TODO
      })
  }

  countryOnChange(event) {
    this.selectedCountry = event.value
  }


}
