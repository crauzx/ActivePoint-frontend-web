import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  activeNumber:number = 2
  
  result$: Observable<any>

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.result$ = this.userService.getUser();
  }

}
