import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  
  users: Users[]
  result$: Observable<any>

  constructor(private userService:UserService, private shareNavbar:ShareNavBarService) { }

  ngOnInit(): void {
    // this.result$ = this.userService.getUser();
    this.shareNavbar.setNavActiveNumber(2)
    this.tempSeed()
  }

  private tempSeed(){
    this.users = []
    this.users.push(new Users("test1@binus.edu", "Tester", 10))
    this.users.push(new Users("tester2@binus.edu", "Tester", 10))
    this.users.push(new Users("test3@binus.edu", "Tester", 5))
    this.users.push(new Users("tester4@binus.edu", "Tester", 1))
    this.users.push(new Users("test5@binus.edu", "Tester", 10))
    this.users.push(new Users("tester6@binus.edu", "Tester", 7))
  }

}
