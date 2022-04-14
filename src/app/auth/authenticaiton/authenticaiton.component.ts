import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authenticaiton.service';

@Component({
  selector: 'app-authenticaiton',
  templateUrl: './authenticaiton.component.html',
  styleUrls: ['./authenticaiton.component.css']
})
export class AuthenticaitonComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  public onSubmit(data:NgForm){
    console.log(data);
    
    this.auth.signUp(data.value.email,data.value.password).subscribe(
      data => {
        console.log(data);
      }
    );

    data.reset();
  }

}
