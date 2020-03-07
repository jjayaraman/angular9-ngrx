import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';

import { RegionsComponent } from './component/regions/regions.component';
import { HomeComponent } from './component/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
