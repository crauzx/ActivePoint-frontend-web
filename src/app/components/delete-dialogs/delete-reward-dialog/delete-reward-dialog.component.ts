import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { RewardService } from 'src/app/services/reward/reward.service';

@Component({
  selector: 'app-delete-reward-dialog',
  templateUrl: './delete-reward-dialog.component.html',
  styleUrls: ['./delete-reward-dialog.component.sass']
})
export class DeleteRewardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRewardDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private rewardService:RewardService,
    private _snackBar: MatSnackBar) { }

  rewardServiceSubscription:Subscription
  
  ngOnInit(): void {
  }

  onDeleteClick():void{
    this.rewardServiceSubscription = this.rewardService.deleteReward(this.data, localStorage.getItem('token')).subscribe( res => {
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.dialogRef.close(res)
      }
    })
  }

  ngOnDestroy(){
    if(this.rewardServiceSubscription != undefined)
      this.rewardServiceSubscription.unsubscribe()
  }

}
