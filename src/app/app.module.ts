import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './approutingmodule';

import { AppComponent } from './app.component';
import { FootNavBar } from './footer/footnavbar';
import { HeadNavBar } from './header/headnavbar';
import { HomeCarousel } from './homecarousel/homecarousel';
import { FeaturedProduct } from './featuredproductcard/featuredproduct';
import { BannerCard } from './homebannercard/bannercard';
import { ColoroftheYear } from './coloroftheyear/coloroftheyear.component';
import { HomeLayoutComponent } from './home-layout/home-layout';
import { PastColoroftheYear } from './PastColorsoftheYear/pastcolorsoftheyear';
import { EventsandWeb } from './EventsandWebinars/eventsandweb.component';
import { ColorTrendReport } from './FashionColorTrendReport/colortrend.component';
import { BooksandPublish } from './BooksandPublish/booksandpublish.component';
import { HomeArticlesComp } from './Home Articles/homearticle.component';
import { HomeArticle } from './homearticlecards/homearticlecard';
import { Article } from './Articles/articlecard';
import { ArticlesComp } from './Articles/articles.component';
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddArticleComponent } from './store/add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { AuthenticaitonComponent } from './auth/authenticaiton/authenticaiton.component';


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
    HomeArticlesComp,
    HomeArticle,
    ArticlesComp,
    Article,
    UserInfoComponent,
    AddArticleComponent,
    AuthenticaitonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
