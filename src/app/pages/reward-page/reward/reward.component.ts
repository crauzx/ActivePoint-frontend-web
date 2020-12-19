import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { InsertRewardDialogComponent } from 'src/app/components/insert-dialogs/insert-reward-dialog/insert-reward-dialog.component';
import { ViewRewardsComponent } from 'src/app/components/views/view-rewards/view-rewards.component';
import { RewardTypes } from 'src/app/models/reward_types';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { RewardTypeService } from 'src/app/services/reward_type/reward-type.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.sass']
})
export class RewardComponent implements OnInit, OnDestroy {

  @ViewChild(ViewRewardsComponent) viewRewardsComponent:ViewRewardsComponent
  taskForm:FormGroup
  rewardType:RewardTypes[]
  show:boolean
  private getProgressBarService: Subscription

  constructor(private shareNavbar:ShareNavBarService, private dialog:MatDialog, private rewardTypeService:RewardTypeService
    , private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(3)
    this.progressBar.setShow(true)
    this.getProgressBarService = this.progressBar.getShow()
      .subscribe( show => 
        this.show = show
      )
  }

  openInsertDialog(){
    const insertDialogRef = this.dialog.open(InsertRewardDialogComponent,{
      width: '500px',
      data: this.rewardType
    })

    insertDialogRef.afterClosed().subscribe( async res => {
      this.taskForm = res
      if(this.taskForm != undefined) {
        this.viewRewardsComponent.getRewards()
      }
    })
  }

  getAllRewardTypes(){
    this.rewardType = []
    this.rewardTypeService.getAllRewardTypes(localStorage.getItem('token')).subscribe( async res => {
      res.forEach(item => {
        this.rewardType.push(new RewardTypes(item["id"], item["type_name"]))
      })
      await this.openInsertDialog();
    })
  }

  openDialog(){
    this.getAllRewardTypes()
  }

  ngOnDestroy() {
    if(this.getProgressBarService != undefined)
      this.getProgressBarService.unsubscribe()
  }

}
