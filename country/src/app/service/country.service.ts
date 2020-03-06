import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {

  }

  getCountriesByRegion(region: string): Promise<any> {
    const URL = environment.API_BASE + '/region/' + region
    return this.httpClient.get(URL).toPromise()
  }

}
