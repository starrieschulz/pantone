import { Injectable } from "@angular/core";
import { ArticleItem } from "./articleitem.model";
import { HomeArticleItem } from "./homearticleitem.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Article } from "./Articles/articlecard";

@Injectable(
    { providedIn: 'root' }
)
export class ArticlesService {
   
    constructor(private db:AngularFireDatabase){

    }
    getArticles(){
        return this.db.list<ArticleItem>("articles").valueChanges();
    }
    getHomeArticles(){
       return this.db.list<HomeArticleItem>("homearticles").valueChanges();
    }

}