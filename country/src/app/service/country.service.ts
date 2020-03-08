import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment'
/**
 * Service to call the Countries API
 * 
 * @author Jayakumar Jayaraman
 */
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // constructor
  constructor(private httpClient: HttpClient) { }

  // API to get all the countries for the given region
  getCountriesByRegion(region: string) {
    const URL = environment.API_BASE + '/region/' + region
    return this.httpClient.get(URL)
  }

}
