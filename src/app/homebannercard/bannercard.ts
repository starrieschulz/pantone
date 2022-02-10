import { Component, Input } from "@angular/core";

@Component({
    selector: 'bannercard',
    templateUrl: 'bannercard.html',
    styleUrls: ['bannercard.css']
})

export class BannerCard{
    @Input() image:string;

    constructor(){
        this.image = "";
    }
}