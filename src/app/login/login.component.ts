import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  userName: string='';
  password: string='';
  loginSuccess = false;
  loginFailed = false;

  constructor(){
    
  }

  login() {
    this.loginFailed = this.loginSuccess = false;
    if (this.userName == "admin" && this.password == "admin@123") {
      this.loginSuccess = true
    } else {
      this.loginFailed = true;
    }
  }
  ngOnInit(): void {
  }

}
