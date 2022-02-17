import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './approutingmodule';

import { AppComponent } from './app.component';
import { FootNavBar } from './footer/footnavbar';
import { HeadNavBar } from './header/headnavbar';
import { HomeCarousel } from './homecarousel/homecarousel';
import { FeaturedProduct } from './homeproductcard/featuredproduct';
import { BannerCard } from './homebannercard/bannercard';
import { ColoroftheYear } from 'src/coloroftheyear/coloroftheyear.component';
import { HomeLayoutComponent } from './home-layout/home-layout';
import { PastColoroftheYear } from './PastColorsoftheYear/pastcolorsoftheyear';
import { EventsandWeb } from './EventsandWebinars/eventsandweb.component';
import { ColorTrendReport } from './FashionColorTrendReport/colortrend.component';
import { BooksandPublish } from './BooksandPublish/booksandpublish.component';
import { ArticlesComp } from './Articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadNavBar,
    FootNavBar,
    HomeCarousel,
    FeaturedProduct,
    BannerCard,
    ColoroftheYear,
    HomeLayoutComponent, 
    PastColoroftheYear,
    EventsandWeb,
    ColorTrendReport,
    BooksandPublish,
    ArticlesComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
