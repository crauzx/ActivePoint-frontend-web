import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  // Attribute
  email : String
  password : String
  hide : Boolean

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  // Function
  ngOnInit(): void {
    this.initializeAtt()
  }

  initializeAtt(){
    this.hide = true
    this.email = ""
    this.password = ""
  }

  login(){
    if(this.checkEmailAndPassword()){

    }
  }

  checkEmailAndPassword() : Boolean{
    return true
  }

}
