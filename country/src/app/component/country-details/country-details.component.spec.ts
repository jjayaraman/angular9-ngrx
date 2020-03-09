import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    component.country = {
      name: 'India',
      capital: 'Delhi',
      population: 1000,
      currencies: [{
        code: 'INR',
        name: 'Rupees',
        symbol: 'R'
      }],
      flag: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('#name').textContent).toContain('India');
    expect(compiled.querySelector('#capital').textContent).toContain('Delhi');
    expect(compiled.querySelector('#population').textContent).toContain('1000');
  });
});
