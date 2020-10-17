import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { }

  // Attribute
  email : String
  password : String
  hide : Boolean
  invalid: Boolean

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

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
    this.invalid = false
  }

  login(){
    this.router.navigate(['/home'])
  }

  checkEmailAndPassword(value) : Boolean{
    this.userService.postUser(value).subscribe(res => {
      // console.log(res)
      // console.log(res['email'])
    })
    return false
  }

  onSubmit(form: NgForm){
    this.userForm.setValue({email:this.email, password:this.password})
    if(this.checkEmailAndPassword(form.value)){
      this.login()
    }
  }

}
