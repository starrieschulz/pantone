import { Component } from '@angular/core';
import { HomeArticleItem } from '../homearticleitem.model';
import { homemockarticlelist } from '../homemockarticleitem';


@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.html',
    styleUrls: ['./home-layout.css']
  })

export class HomeLayoutComponent{
  title = 'pantone';
  homearticles:HomeArticleItem[] = [];

  constructor(){
    for (var homearticle of homemockarticlelist){
      this.homearticles.push(homearticle);
    }
  }
}