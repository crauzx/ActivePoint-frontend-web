import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Rewards } from 'src/app/models/rewards';
import { RewardTypes } from 'src/app/models/reward_types';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { RewardService } from 'src/app/services/reward/reward.service';
import { RewardTypeService } from 'src/app/services/reward_type/reward-type.service';
import { DeleteRewardDialogComponent } from '../../delete-dialogs/delete-reward-dialog/delete-reward-dialog.component';
import { UpdateRewardDialogComponent } from '../../update-dialogs/update-reward-dialog/update-reward-dialog.component';
import { ViewRewardDetailDialogComponent } from '../view-dialogs/view-reward-detail-dialog/view-reward-detail-dialog.component';

@Component({
  selector: 'app-view-rewards',
  templateUrl: './view-rewards.component.html',
  styleUrls: ['./view-rewards.component.sass']
})
export class ViewRewardsComponent implements OnInit, OnDestroy {

  rewards:Rewards[]
  private getAllRewardSubcription : Subscription
  rewardTypes:RewardTypes[]

  dataSource = new MatTableDataSource<Rewards>()
  displayedColumns: string[] = ['reward_description', 'reward_quantity', 'reward_claim_point','edit']
  
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private rewardService:RewardService, private dialog:MatDialog, private rewardTypeService:RewardTypeService
    , private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    this.getRewards()
    this.getAllRewardTypes()
  }

  getRewards(){
    this.rewards = []
    if (this.getAllRewardSubcription && !this.getAllRewardSubcription.closed) {
      this.getAllRewardSubcription.unsubscribe()
    }

    this.getAllRewardSubcription = this.rewardService.getAllReward(localStorage.getItem('token')).subscribe( res => {
      this.dataSource.data = res as Rewards[]
      res.forEach(item => {
        this.rewards.push(new Rewards(item["id"], new RewardTypes(item["reward_type"]["id"], item["reward_type"]["type_name"]), item["description"], item["quantity"], item["claim_point"]))
      })
      this.setDataSource()
      this.progressBar.setShow(false)
    })
  }
  
  getAllRewardTypes(){
    this.rewardTypes = []
    this.rewardTypeService.getAllRewardTypes(localStorage.getItem('token')).subscribe( async res => {
      res.forEach(item => {
        this.rewardTypes.push(new RewardTypes(item["id"], item["type_name"]))
      })
    })
  }

  setDataSource(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openDetailDialog(idx){
    this.dialog.open(ViewRewardDetailDialogComponent,{
      width: '500px',
      data: this.rewards[idx]
    })
  }

  openUpdateDialog(idx){
    const updateDialogRef = this.dialog.open(UpdateRewardDialogComponent,{
      width: '500px',
      data: [this.rewards[idx], this.rewardTypes]
    })

    updateDialogRef.afterClosed().subscribe( async res => {
      if(res != undefined) {
        this.getRewards()
      }
    })
  }


  openDeleteDialog(id){
    const deleteDialogRef = this.dialog.open(DeleteRewardDialogComponent,{
      data: id
    })
    deleteDialogRef.afterClosed().subscribe( async res => {
      if(res != undefined) {
        this.getRewards()
      }
    })
  }

  ngOnDestroy(){
    if(this.getAllRewardSubcription != undefined)
      this.getAllRewardSubcription.unsubscribe()
  }

}
