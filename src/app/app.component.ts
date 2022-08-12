import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'MyFirstApp';
  imgSrc ="assets/maxceed.png";
  imgwidth="300"
  flag = false
  buttonStatus =false
  value: string="2"
  applyclass =true

  // Style Binding

  bgcolor=false
  applyStyle = true;
  styleObj1 = {
    backgroundColor: 'orange',
    color: 'black'
  }
  styleObj2 = {
    backgroundColor: 'greenyellow',
    color: 'white'
  }

// Event Binding

  courseName: string = "Angular";
  updateCourse(course: string) {
    this.courseName = course;
  }
  reset(){
    this.courseName = 'Angular';
  }
  pcolor=true
  changeColor(){
    if(this.pcolor==true){
      this.pcolor=false
    }
    else if(this.pcolor==false){
      this.pcolor=true
    }

  }

  // Two Way Binding
  name1: string = "Johnny";

  // ng-if directive

  userName: string='';
  password: string='';
  loginSuccess = false;
  loginFailed = false;
  login() {
    this.loginFailed = this.loginSuccess = false;
    if (this.userName == "admin" && this.password == "admin@123") {
      this.loginSuccess = true
    } else {
      this.loginFailed = true;
    }
  }
  colorName: string = 'red';
  fontWeight: string = 'bold';
  borderStyle: string = '1px solid black'
  
  isBordered: boolean = true;

  productCode: string = "PROD_P001";
  productName: string = "Apple MPTT2 MacBook Pro"
  productPrice: number = 217021;
  purchaseDate: string = "1/17/2018"
  productTax: string = "0.1";
  productRating: number = 4.92;

  selected: boolean =true;

  fnts="fs-1"
  fsize="6"
  changefont(){
    switch(this.fnts){
      case "fs-1" : {
        this.fnts="fs-2";
        this.fsize="5";
      break;}
      case "fs-2" : {
        this.fnts="fs-3";
        this.fsize="4";
      break;}
      case "fs-3" : {
        this.fnts="fs-4";
        this.fsize="3";
      break;}
      case "fs-4" : {
        this.fnts="fs-5";
        this.fsize="2";
      break;}
      case "fs-5" : {
        this.fnts="fs-6";
        this.fsize="1";
      break;}
      case "fs-6" : {
        this.fnts="fs-1"
        this.fsize="6";
        ;
      break;}
    }
  }
}

