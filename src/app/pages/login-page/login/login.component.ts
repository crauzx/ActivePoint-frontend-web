import {  Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private userService:UserService, 
    private shareNavbar:ShareNavBarService) { }

  // Attribute
  email : String
  password : String
  hide : Boolean
  invalid: Boolean
  
  private userToken : String
  private authTokenSubcription : Subscription
  private userSubcription : Subscription

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  passwordFormControl = new FormControl('', [
    Validators.required
  ])

  // Function
  ngOnInit(): void {
    this.initializeAtt()
  }

  private initializeAtt(){
    this.hide = true
    this.email = this.password = this.userToken = ""
    this.invalid = false
    this.shareNavbar.setNavActiveNumber(-1)
  }

  private toHome(){
    this.router.navigate(['/home'])
  }

  private getUserByFormValue(value){
    this.authTokenSubcription = this.userService.postUserToken(value).subscribe(auth_token => {
      // console.log(auth_token)
      this.setUserToken(auth_token['token'])
      this.getUser(this.userToken)
    })
  }

  private getUser(auth_token){
    this.userSubcription = this.userService.getAdmin(auth_token).subscribe(res => {
      // console.log(res)
      localStorage.setItem('token', auth_token)
      if(res['message'] === 'admin')
        this.toHome()
      else{
        this.invalid = true
      }
    })
  }

  private setUserToken(token){
    if(token != undefined){
      this.userToken = token
    }
  }
  
  private setUserFormValue(){
    this.userForm.setValue({
      email:this.email, 
      password:this.password
    })
  }

  onSubmit(form: NgForm){
    this.setUserFormValue()
    this.getUserByFormValue(form.value)
  }

  ngOnDestroy(): void {
    this.userSubcription.unsubscribe()
    this.authTokenSubcription.unsubscribe()
  }

}
