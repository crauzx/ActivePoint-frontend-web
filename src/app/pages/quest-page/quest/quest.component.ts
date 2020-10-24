import { Component, OnInit } from '@angular/core';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.sass']
})
export class QuestComponent implements OnInit {

  constructor(private shareNavbar:ShareNavBarService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(1)
  }

}
