import { Component, OnInit } from "@angular/core";
import { ArticleItem } from "../articleitem.model";
import { ArticlesService } from "../articles.service";

@Component({
    selector: 'L-pastcolorsoftheyear',
    templateUrl: 'pastcolorsoftheyear.html',
    styleUrls: ['pastcolorsoftheyear.css']
})

export class PastColoroftheYear implements OnInit{
    articles:ArticleItem[] = [];

    constructor(private articlesService:ArticlesService){
    }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((data: ArticleItem []) => {
      console.log("Fetching articles");
      for (var article of data){
        console.log(article);
        this.articles.push(article);
      }
    });
  }
}