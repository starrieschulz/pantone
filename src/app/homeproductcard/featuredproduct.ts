import { Component, Input } from "@angular/core";

@Component({
    selector: 'homeproductcard',
    templateUrl: 'featuredproduct.html',
    styleUrls: ['featuredproduct.css']
})

export class FeaturedProduct{
    @Input() caption: string;
    @Input() image: string;

    constructor(){
        this.image = "";
        this.caption = "xxxxxx";

    }
}