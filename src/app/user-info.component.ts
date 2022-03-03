import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Component({
    selector:"user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient){
    }
    ngOnInit(): void{
        console.log("Sending a get request to the server");
        this.getUserInfo();
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    getUserInfo(){
        return this.http.get<UserInfo>('https://pantone-f4271-default-rtdb.firebaseio.com/my-info.json')
    }
    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo)=>{
            console.log(data);
            this.myInfo = data;
        })
    }
}