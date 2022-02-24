import { Component, Input } from "@angular/core";

@Component({
    selector: 'homearticlecard',
    templateUrl: 'homearticlecard.html',
    styleUrls: ['homearticlecard.css']
})

export class HomeArticle{
    @Input() caption: string;
    @Input() image: string;

    constructor(){
        this.image = "";
        this.caption = "xxxxxx";
    }
}