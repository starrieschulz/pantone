import { Component, OnInit } from '@angular/core';
import { ArticleItem } from 'src/app/articleitem.model';
import { ArticlesService } from 'src/app/articles.service';

@Component({
  selector: 'fm-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private as:ArticlesService) { }

  ngOnInit(): void {
  }

  addArticle(article:ArticleItem){
    console.log("You pressed add article!")
    console.log(article);

    this.as.addArticle(article);
  }

}
