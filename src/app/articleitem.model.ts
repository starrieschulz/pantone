export class ArticleItem{
    image: string;
    caption: string;
    publishdate: string;

    constructor(image:string,caption:string,publishdate:string){
        this.image=image;
        this.publishdate=publishdate;
        this.caption=caption;
    }
}