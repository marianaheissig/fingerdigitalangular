import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit{

  formSignup!: FormGroup

  ngOnInit(): void{
    this.formSignup= new FormGroup({
      signupName: new FormControl (''),
      signupCPF: new FormControl ('', Validators.minLength(11)),
      signupAddress: new FormControl (''),
      signupPhone: new FormControl ('', Validators.minLength(11)),
      signupEmail: new FormControl ('', [Validators.email]),
      signupBirth: new FormControl (''),
      signupUser: new FormControl (''),
      signupSex: new FormControl (''),
    })
  }
  
  onSubmit(){
    if(this.formSignup.valid && this.formSignup.value.signupName != ""){
      console.log(this.formSignup);
      console.log(this.formSignup.value.signupName)
    }
    else{
      console.log("dados inseridos incorretamente.")
    }
  }
}
