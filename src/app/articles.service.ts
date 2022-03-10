import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleItem } from "./articleitem.model";
import { HomeArticleItem } from "./homearticleitem.model";

@Injectable(
    { providedIn: 'root' }
)
export class ArticlesService {
    private baseUrl: string = "https://pantone-f4271-default-rtdb.firebaseio.com/";
    private homearticlesEndPoint: string = "homearticles.json"
    private articlesEndPoint: string = "articles.json"

    constructor(private http:HttpClient){

    }

    getArticles(){
        return this.http.get<ArticleItem []>(this.baseUrl + this.articlesEndPoint);
    }
    getHomeArticles(){
        return this.http.get<HomeArticleItem []>(this.baseUrl + this.homearticlesEndPoint);
    }

}