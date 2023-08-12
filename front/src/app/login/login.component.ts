import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor() {}

  formLogin!: FormGroup

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      emailForm: new FormControl ('', [Validators.email])
    })
  }

  onSubmit(){
    if(this.formLogin.valid){
    console.log("submitado")
    console.log(this.formLogin.value.emailForm)
    }
    else{
      console.log("email invalido");
    }
  }
}
