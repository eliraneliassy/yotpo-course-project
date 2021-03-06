import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../../forbidden-name.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;

  myForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, forbiddenNameValidator(/gal/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')] )
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.myForm = this.fb.group({
    //   username: this.fb.control(null, [Validators.required, forbiddenNameValidator(/gal/)]),
    // })

    // this.myForm.valueChanges.subscribe(console.log)

    this.myForm.controls['email'].valueChanges.subscribe(console.log)
  }

  changeShowPassword(){

    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
  }

  submit(){
    console.log(this.myForm);
  }

}
