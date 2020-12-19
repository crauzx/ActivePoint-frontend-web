import {  Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private shareNavbar:ShareNavBarService, private _snackBar: MatSnackBar) { }

  // Attribute
  email : String
  password : String
  hide : Boolean
  show : Boolean
  
  private userToken : String
  private authTokenSubcription : Subscription
  private userSubcription : Subscription

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  // Function
  ngOnInit(): void {
    this.initializeAtt()
  }

  private initializeAtt(){
    this.hide = true
    this.email = this.password = this.userToken = ""
    this.show = false
    this.shareNavbar.setNavActiveNumber(-1)
  }

  private toHome(){
    this.router.navigate(['/home'])
  }

  private getUserByFormValue(value){
    this.authTokenSubcription = this.userService.postUserToken(value).subscribe(auth_token => {
      this.setUserToken(auth_token['token'])
      this.getUser(this.userToken)
    })
  }

  private getUser(auth_token){
    this.userSubcription = this.userService.getAdmin(auth_token).subscribe(res => {
      localStorage.setItem('token', auth_token)
      if(res['message'] === 'admin'){
        this.show = false
        this.toHome()
      }
    }, _ => {
      this._snackBar.open("WRONG EMAIL OR PASSWORD", "", { duration: 3000 })
      this.show = false
    })
  }

  private setUserToken(token){
    if(token != undefined){
      this.userToken = token
    }
  }

  onSubmit(){
    this.show = true
    this.getUserByFormValue(this.userForm.value)
  }

  ngOnDestroy(): void {
    this.userSubcription.unsubscribe()
    this.authTokenSubcription.unsubscribe()
  }

}
