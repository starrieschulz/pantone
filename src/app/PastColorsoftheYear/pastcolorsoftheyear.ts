import { Component } from "@angular/core";
import { ArticleItem } from "../articleitem.model";
import { mockarticlelist } from "../mockarticleitem";

@Component({
    selector: 'L-pastcolorsoftheyear',
    templateUrl: 'pastcolorsoftheyear.html',
    styleUrls: ['pastcolorsoftheyear.css']
})

export class PastColoroftheYear{
    articles:ArticleItem[] = [];

    constructor(){
      for (var article of mockarticlelist){
        this.articles.push(article);
      }
    }
}