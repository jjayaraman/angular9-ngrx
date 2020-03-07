import { CountryService } from './../../../service/country.service';
import { Component, OnInit } from '@angular/core';
import Country from 'src/app/model/Country';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regions: object[]
  countries: object[]
  selectedRegion: string
  selectedCountry: Country

  constructor(private countryService: CountryService) {
  }


  ngOnInit(): void {
    this.regions = [
      { 'label': 'Asia', 'value': 'asia' },
      { 'label': 'Europe', 'value': 'europe' }]
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
