import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoroftheYear } from './coloroftheyear/coloroftheyear.component';
import { ArticlesComp } from './Articles/articles.component';
import { BooksandPublish } from './BooksandPublish/booksandpublish.component';
import { EventsandWeb } from './EventsandWebinars/eventsandweb.component';
import { ColorTrendReport } from './FashionColorTrendReport/colortrend.component';
import { HomeLayoutComponent } from './home-layout/home-layout';
import { PastColoroftheYear } from './PastColorsoftheYear/pastcolorsoftheyear';


const routes:Routes = [
    {path: '', component:HomeLayoutComponent},
    {path: 'home', component:HomeLayoutComponent},
    {path:'ColoroftheYear', component:ColoroftheYear},
    {path: 'PastColors', component:PastColoroftheYear},
    {path: 'EventsandWebinars',component: EventsandWeb},
    {path:'ColorTrendReport', component: ColorTrendReport},
    {path: 'BooksandPublications', component: BooksandPublish},
    {path: 'Articles', component: ArticlesComp}
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
  