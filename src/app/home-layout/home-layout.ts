import { Component, OnInit } from '@angular/core';
import { HomeArticleItem } from '../homearticleitem.model';
import { ArticlesService } from '../articles.service';


@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.html',
    styleUrls: ['./home-layout.css']
  })

export class HomeLayoutComponent implements OnInit{
  title = 'pantone';
  homearticles:HomeArticleItem[] = [];

  constructor(private articlesService:ArticlesService){
  }
ngOnInit(): void {
  this.articlesService.getHomeArticles().subscribe((data: HomeArticleItem []) => {
    console.log("Fetching articles");
    for (var homearticle of data){
      console.log(homearticle);
      this.homearticles.push(homearticle);
    }
  });
}
}