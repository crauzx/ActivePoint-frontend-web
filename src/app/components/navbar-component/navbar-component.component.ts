import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.sass']
})
export class NavbarComponentComponent implements OnInit, OnDestroy {

  public active: number
  private getNavActiveNumberSubscription: Subscription

  constructor(private router: Router, private shareNavbar:ShareNavBarService) { }

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
    this.router.navigate(['/quest'])
  }

  toManageUser(): void{
    this.router.navigate(['/user'])
  }

  toManageReward(): void{
    this.router.navigate(['/reward'])
  }

  ngOnDestroy() {
    this.getNavActiveNumberSubscription.unsubscribe();
  }

}
