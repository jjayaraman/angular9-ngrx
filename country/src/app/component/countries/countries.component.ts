import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../service/country.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  region: string
  countries: string[]


  ngOnInit(): void {
    this.region = 'Europe'
    this.getCountriesByReqion(this.region)
  }


  getCountriesByReqion(region: string) {
    this.countryService.getCountriesByRegion(region).then(res => {
      console.log(res);
      this.countries = res

    })

  }
}
