import { Component, OnInit } from '@angular/core';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.sass']
})
export class RewardComponent implements OnInit {

  constructor(private shareNavbar:ShareNavBarService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(3)
  }

}
