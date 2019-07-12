import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  email:string;
  password:string;

  
  constructor(private userService:UserService, private router:Router) { }


  ngOnInit() {

  }

  
  login(){
   
    console.log("Login:", this.email, this.password);
    this.userService.login(this.email, this.password).subscribe ( (res)=>{
      console.log(res);
     
    });

}}
