import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: any;
  successMessage: any;
  userName: string="";
  password: string="";
  constructor() { }
  ngOnInit() { }
  verify() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.userName == 'admin' && this.password == 'admin123') {
      this.successMessage = "User logged in successfully";
    }
    else {
      this.errorMessage = "User authentication failed";
    }
    console.log("User Name:", this.userName)
    console.log("Password:", this.password)
  }

}
