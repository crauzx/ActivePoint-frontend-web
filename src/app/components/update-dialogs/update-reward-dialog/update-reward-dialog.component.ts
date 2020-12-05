import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { RewardService } from 'src/app/services/reward/reward.service';

@Component({
  selector: 'app-update-reward-dialog',
  templateUrl: './update-reward-dialog.component.html',
  styleUrls: ['./update-reward-dialog.component.sass']
})
export class UpdateRewardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateRewardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private rewardService:RewardService, 
    private _snackBar: MatSnackBar) {
    }

  rewardServiceSubscription:Subscription
  temp_type_name:String
  
  rewardForm = new FormGroup({
    reward_id: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    reward_type: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    claim_point: new FormControl('', Validators.required),
  })
  
  ngOnInit(): void {
    this.setFormValue()
  }

  private setFormValue(){
    this.rewardForm.setValue({
      reward_id: this.data[0]['id'],
      description : this.data[0].description,
      reward_type: this.data[0].reward_type['id'],
      quantity: this.data[0].quantity,
      claim_point: this.data[0].claim_point
    })
  }

  ngOnDestroy(){
    if(this.rewardServiceSubscription != undefined)
      this.rewardServiceSubscription.unsubscribe()
  }

  searchRewardType(type_id){
    for (let index = 0; index < this.data[1].length; index++) {
      if (this.data[1][index]['id'] === type_id)
        return index
    }
    return -1
  }

  patchFormValue(){
    let type_id = this.rewardForm.get('reward_type').value
    let type_idx = this.searchRewardType(type_id)
    this.rewardForm.patchValue({
      reward_type: this.data[1][type_idx]['id']
    })
  }

  onSubmit(){
    this.temp_type_name = this.rewardForm.get('reward_type').value
    this.patchFormValue()
    console.log(this.rewardForm.value)
    this.rewardServiceSubscription = this.rewardService.putReward(this.rewardForm.value, localStorage.getItem('token')).subscribe( res => {
      console.log(res)
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.dialogRef.close(this.rewardForm)
      }
      this.rewardForm.patchValue({
        reward_type: this.temp_type_name
      })
    })
  }

}
