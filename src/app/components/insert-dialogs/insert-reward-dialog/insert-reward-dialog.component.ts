import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { RewardService } from 'src/app/services/reward/reward.service';

@Component({
  selector: 'app-insert-reward-dialog',
  templateUrl: './insert-reward-dialog.component.html',
  styleUrls: ['./insert-reward-dialog.component.sass']
})
export class InsertRewardDialogComponent implements OnInit, OnDestroy {

  rewardServiceSubscription:Subscription

  rewardForm = new FormGroup({
    description: new FormControl('', Validators.required),
    type_id: new FormControl(''),
    reward_type: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    claim_point: new FormControl('', Validators.required),
  })

  constructor(public dialogRef: MatDialogRef<InsertRewardDialogComponent>, private rewardService:RewardService
    , private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  searchRewardType(type_id){
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]['id'] === type_id)
        return index
    }
    return -1
  }

  onSubmit(){
    let type_id = this.rewardForm.get('reward_type').value
    let type_idx = this.searchRewardType(type_id)
    this.rewardForm.patchValue({
      type_id : type_id,
      reward_type: this.data[type_idx]
    })
    this.rewardServiceSubscription = this.rewardService.postReward(this.rewardForm.value, localStorage.getItem('token')).subscribe( res => {
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.dialogRef.close(this.rewardForm)
      }
    })
  }

  ngOnDestroy(){
    if(this.rewardServiceSubscription != undefined)
      this.rewardServiceSubscription.unsubscribe()
  }

}
