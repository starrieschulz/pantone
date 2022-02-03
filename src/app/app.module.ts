import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FootNavBar } from './footer/footnavbar';
import { HeadNavBar } from './header/headnavbar';
import { HomeCarousel } from './homecarousel/homecarousel';


@NgModule({
  declarations: [
    AppComponent,
    HeadNavBar,
    FootNavBar,
    HomeCarousel
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
