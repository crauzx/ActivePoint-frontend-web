import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-share-task',
  templateUrl: './share-task.component.html',
  styleUrls: ['./share-task.component.sass']
})
export class ShareTaskComponent implements OnInit, OnDestroy {

  show:boolean
  private getProgressBarService: Subscription

  constructor(private shareNavbar:ShareNavBarService, private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(2)
    this.progressBar.setShow(true)
    this.getProgressBarService = this.progressBar.getShow()
      .subscribe( show => 
        this.show = show
      )
  }

  ngOnDestroy() {
    if(this.getProgressBarService != undefined)
      this.getProgressBarService.unsubscribe()
  }

}
