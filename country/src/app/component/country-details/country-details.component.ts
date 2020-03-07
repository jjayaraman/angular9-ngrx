import Country from 'src/app/model/Country';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor() { }

  @Input() country: Country

  ngOnInit(): void {
  }

}
