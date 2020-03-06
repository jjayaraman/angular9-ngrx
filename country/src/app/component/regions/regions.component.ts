import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../service/country.service';

@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions: object[]

  constructor() { }


  ngOnInit(): void {
    this.regions = [
      { 'label': 'Asia', 'value': 'asia' },
      { 'label': 'Europe', 'value': 'europe' }]
  }


  onchange() {
    console.log('on ch');

  }

}
