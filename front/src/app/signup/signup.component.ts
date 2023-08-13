import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit{


  constructor(private userService: UserService){

  }

  formSignup!: FormGroup

  ngOnInit(): void{
    this.formSignup= new FormGroup({
      userID: new FormControl(0),
      userName: new FormControl (''),
      userCPF: new FormControl ('', Validators.minLength(11)),
      userAddress: new FormControl (''),
      userPhone: new FormControl ('', Validators.minLength(11)),
      userEmail: new FormControl ('', [Validators.email]),
      userBirth: new FormControl (''),
      userType: new FormControl (''),
      userSex: new FormControl (''),
    })
  }
  
  onSubmit(){
    if(this.formSignup.valid && this.formSignup.value.userName != ""){
      console.log(this.formSignup);
      console.log(this.formSignup.value.userName)
      this.userService.createUser(this.formSignup.value).subscribe((data)=>{
          console.log("usuario criado: " + data)
      })
      alert('Conta criada com sucesso');
    }
    else{
      alert('dados inseridos incorretamente.');
    }
  }
}
