import { CountryService } from './../../../service/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regions: object[]
  countries: object[]
  selectedRegion: string

  constructor(private countryService: CountryService) {
  }


  ngOnInit(): void {
    this.regions = [
      { 'label': 'Asia', 'value': 'asia' },
      { 'label': 'Europe', 'value': 'europe' }]
  }


  regionOnChange(event) {
    this.selectedRegion = event.value
    this.countryService.getCountriesByRegion(event.value)
      .then(res => {
        this.countries = res
      }).catch(err => {
        console.log(err); // TODO
      })
  }

  countryOnChange(event) {
    console.log('countryOnChange ...', event);

  }


}
