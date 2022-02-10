import { Component } from '@angular/core';
import { ArticleItem } from './articleitem.model';
import { mockarticlelist } from './mockarticleitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pantone';
  articles:ArticleItem[] = [];

  constructor(){
    for (var article of mockarticlelist){
      this.articles.push(article);
    }
  }
}
