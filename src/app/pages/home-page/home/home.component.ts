import { Component, OnInit } from '@angular/core';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private shareNavbar:ShareNavBarService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(0)
  }

}
