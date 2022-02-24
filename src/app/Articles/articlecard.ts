import { Component, Input } from "@angular/core";

@Component({
    selector: 'articlecard',
    templateUrl: 'articlecard.html',
    styleUrls: ['articlecard.css']
})

export class Article{
    @Input() caption: string;
    @Input() image: string;
    @Input() publishdate: string;

    constructor(){
        this.image = "";
        this.caption = "xxxxxx";
        this.publishdate = "00/00/00";
    }
}