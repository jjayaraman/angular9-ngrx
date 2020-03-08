import { CountryEffects } from './store/effect/country.effect';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RegionsComponent } from './component/regions/regions.component';
import { HomeComponent } from './component/home/home/home.component';
import { CountryDetailsComponent } from './component/country-details/country-details.component';
import { regionReducer } from './store/reducers/region.reducer';
import { countryReducer } from './store/reducers/country.reducer';


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    HomeComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ regions: regionReducer, countries: countryReducer }),
    EffectsModule.forRoot([CountryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule,
    PanelModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
