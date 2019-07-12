import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  user : User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(){    
    console.log("User", this.user);
    this.userService.register(this.user).subscribe ( (res)=>{
      console.log(res);
      this.router.navigate(['login']);
    });
  }

}
