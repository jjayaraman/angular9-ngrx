import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../service/country.service';

@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions: object[]
  selectedRegion: string

  constructor() { }


  ngOnInit(): void {
    this.regions = [
      { 'label': 'Asia', 'value': 'asia' },
      { 'label': 'Europe', 'value': 'europe' }]
  }


  onChange(event) {
    console.log('on ch', event);
    this.selectedRegion = event.value

  }

}
