import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';

import { DropDownComponent } from './component/common/drop-down/drop-down.component';
import { RegionsComponent } from './component/regions/regions.component';
import { CountriesComponent } from './component/countries/countries.component';
import { HomeComponent } from './component/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    RegionsComponent,
    CountriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
