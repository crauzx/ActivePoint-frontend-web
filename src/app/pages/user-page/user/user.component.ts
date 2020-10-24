import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  
  result$: Observable<any>

  constructor(private userService:UserService, private shareNavbar:ShareNavBarService) { }

  ngOnInit(): void {
    // this.result$ = this.userService.getUser();
    this.shareNavbar.setNavActiveNumber(2)
  }

}
