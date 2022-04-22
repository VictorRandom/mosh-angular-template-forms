import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ]

  log(x:any){
    console.log(x);
  }

  submit(f:any){
    console.log(f);
    f.valid
  }



}
