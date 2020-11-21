import { formatDate, Time } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-update-task-dialog',
  templateUrl: './update-task-dialog.component.html',
  styleUrls: ['./update-task-dialog.component.sass']
})
export class UpdateTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService:TaskService, 
    private _snackBar: MatSnackBar) { }

  taskServiceSubscription:Subscription

  taskName:String
  taskDescription:String
  taskRewardPoint:Number
  taskStartDate:Date
  taskStartTime:String
  taskDeadlineDate:Date
  taskDeadlineTime:String
  taskSlot:Number

  taskForm = new FormGroup({
    task_id : new FormControl(''),
    task_name: new FormControl(''),
    description: new FormControl(''),
    reward_point: new FormControl(''),
    start_date: new FormControl(''),
    deadline_date: new FormControl(''),
    slot: new FormControl('')
  })

  ngOnInit(): void {
    this.taskName = this.data.taskName
    this.taskDescription = this.data.description
    this.taskRewardPoint = this.data.rewardPoint
    this.taskStartDate = new Date(this.data.startDate)
    this.taskStartTime = this.getTime(this.taskStartDate)
    this.taskDeadlineDate = new Date(this.data.deadlineDate)
    this.taskDeadlineTime = this.getTime(this.taskDeadlineDate)
    this.taskSlot = this.data.slot
  }

  getTime(date:Date){
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return `${hours}:${minutes}`
  }

  selectStartDate(event: MatDatepickerInputEvent<Date>){
    this.taskStartDate = event.value
  }

  selectDeadlineDate(event: MatDatepickerInputEvent<Date>){
    this.taskDeadlineDate = event.value
  }

  private getDate(date:Date, time:String){
    const format = 'yyyy-MM-dd'
    const locale = 'en-US'
    return `${formatDate(date, format, locale)} ${time}`
  }

  private setFormValue(){
    this.taskForm.setValue({
      task_id : this.data.taskId,
      task_name: this.taskName,
      description: this.taskDescription,
      reward_point: this.taskRewardPoint,
      start_date: this.getDate(this.taskStartDate, this.taskStartTime),
      deadline_date: this.getDate(this.taskDeadlineDate, this.taskDeadlineTime),
      slot: this.taskSlot
    })
  }

  onSubmit(){
    this.setFormValue()
    if(this.taskStartTime != undefined && this.taskDeadlineTime != undefined){
      this.taskServiceSubscription = this.taskService.putTask(this.taskForm.value, localStorage.getItem('token')).subscribe( res => {
        if(res["message"]){
          this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
          this.dialogRef.close(this.taskForm)
        }
        console.log(res)
      })
    }
  }

}
