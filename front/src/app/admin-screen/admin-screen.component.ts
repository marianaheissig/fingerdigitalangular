import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  users: UserModel[] = [];
  userItem: UserModel | undefined;

    constructor(private userService : UserService) {}

  formSignup!: FormGroup

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data
    })
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

  deleteItem(id: number) {
    this.userService.deleteUser(id).subscribe(message => {
      alert(message);
    })
  }
  editarItem(userData: any) {

    this.userItem = userData;
    this.formSignup.patchValue({
      userID: userData.userID,
      userName: userData.userName,
      userCPF: userData.userCPF,
      userAddress: userData.userAddress,
      userPhone: userData.userPhone,
      userEmail: userData.userEmail,
      userBirth: userData.userBirth,
      userType: userData.userType,
      userSex: userData.userSex
    });
    

  }
  onBack() {
    console.log(" aqui")
    this.userItem = undefined
  }
  onSubmit(){
    if(this.formSignup.valid){
      this.userService.updateUser(this.formSignup.value.userID, this.formSignup.value).subscribe((data)=>{
          console.log("usuario atualizado: " + data)
          alert('Usuario atualizado');
      }) 
    }
    else{
      alert('Informacoes invalidas')
    }
  }
}
