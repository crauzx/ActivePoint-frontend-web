import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InsertRewardDialogComponent } from 'src/app/components/insert-dialogs/insert-reward-dialog/insert-reward-dialog.component';
import { ViewRewardsComponent } from 'src/app/components/views/view-rewards/view-rewards.component';
import { RewardTypes } from 'src/app/models/reward_type_name';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { RewardTypeService } from 'src/app/services/reward_type/reward-type.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.sass']
})
export class RewardComponent implements OnInit {

  @ViewChild(ViewRewardsComponent) viewRewardsComponent:ViewRewardsComponent
  taskForm:FormGroup
  rewardType:RewardTypes[]

  constructor(private shareNavbar:ShareNavBarService, private dialog:MatDialog, private rewardTypeService:RewardTypeService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(3)
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

}
