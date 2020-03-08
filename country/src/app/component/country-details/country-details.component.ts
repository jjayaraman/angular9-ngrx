import Country from 'src/app/model/Country';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Country Details component to display the selected country details
 * 
 * @author Jayakumar Jayaraman
 */
@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor() { }

  // Country input data to display in the UI
  @Input() country: Country

  ngOnInit(): void {
  }

}
