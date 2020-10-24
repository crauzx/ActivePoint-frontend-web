import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.sass']
})
export class NavbarComponentComponent implements OnInit, OnDestroy {

  public active: number
  private getNavActiveNumberSubscription: Subscription

  constructor(private router: Router, private shareNavbar:ShareNavBarService, private userService:UserService) { }

  ngOnInit(): void {
    this.getNavActiveNumberSubscription = this.shareNavbar.getNavActiveNumber()
      .subscribe( active => 
        this.active = active
      );
  }

  toHome(): void{
    this.router.navigate(['/home'])
  }

  toManageQuest(): void{
    this.router.navigate(['/task'])
  }

  toManageUser(): void{
    this.router.navigate(['/user'])
  }

  toManageReward(): void{
    this.router.navigate(['/reward'])
  }

  logout(): void{
    this.userService.getLogout(localStorage.getItem('token'))
    localStorage.removeItem('token')
    this.toLogin()
  }

  toLogin(): void{
    this.router.navigate(['/login'])
  }

  ngOnDestroy() {
    this.getNavActiveNumberSubscription.unsubscribe();
  }

}
