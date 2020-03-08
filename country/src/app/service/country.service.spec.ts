import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule]
      }
    );
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
