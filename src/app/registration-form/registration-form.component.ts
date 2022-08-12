import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  // registerForm!: FormGroup;
  submitted:boolean=false;
  registerForm:FormGroup =this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city : []
      }),
      email:['',validateEmail]
    });

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    // this.registerForm=this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   address: this.formBuilder.group({
    //     street: [],
    //     zip: [],
    //     city : []
    //   }),
    //   email:['',validateEmail]
    // });
  }

}
function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^[\w._]+@[A-Za-z]+\.(com|co\.in|org)$/;
  return EMAIL_REGEXP.test(c.value) ? null : {
      emailError: {
          message: "Email is invalid"
      }
  };
}
