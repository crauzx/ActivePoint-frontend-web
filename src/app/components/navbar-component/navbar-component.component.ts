import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.sass']
})
export class NavbarComponentComponent implements OnInit {

  @Input() active:number

  constructor(public router: Router) { }

  ngOnInit(): void {
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

}