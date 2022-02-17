import { Component } from '@angular/core';
import { ArticleItem } from '../articleitem.model';
import { mockarticlelist } from '../mockarticleitem';

@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.html',
    styleUrls: ['./home-layout.css']
  })

export class HomeLayoutComponent{
  title = 'pantone';
  articles:ArticleItem[] = [];

  constructor(){
    for (var article of mockarticlelist){
      this.articles.push(article);
    }
  }
}