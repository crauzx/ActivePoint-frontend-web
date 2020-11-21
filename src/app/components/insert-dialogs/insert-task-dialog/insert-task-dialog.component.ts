import { formatDate, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-insert-task-dialog',
  templateUrl: './insert-task-dialog.component.html',
  styleUrls: ['./insert-task-dialog.component.sass']
})
export class InsertTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InsertTaskDialogComponent>, private taskService:TaskService
    , private _snackBar: MatSnackBar) { }

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
    task_name: new FormControl(''),
    description: new FormControl(''),
    reward_point: new FormControl(''),
    start_date: new FormControl(''),
    deadline_date: new FormControl(''),
    slot: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.setFormValue()
    if(this.taskStartTime != undefined && this.taskDeadlineTime != undefined){
      this.taskServiceSubscription = this.taskService.postTask(this.taskForm.value, localStorage.getItem('token')).subscribe( res => {
        if(res["message"]){
          this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
          this.dialogRef.close(this.taskForm)
        }
      })
    }
  }

  private getDate(date:Date, time:String){
    const format = 'yyyy-MM-dd'
    const locale = 'en-US'
    return `${formatDate(date, format, locale)} ${time}`
  }

  private setFormValue(){
    this.taskForm.setValue({
      task_name: this.taskName,
      description: this.taskDescription,
      reward_point: this.taskRewardPoint,
      start_date: this.getDate(this.taskStartDate, this.taskStartTime),
      deadline_date: this.getDate(this.taskDeadlineDate, this.taskDeadlineTime),
      slot: this.taskSlot
    })
  }

  selectStartDate(event: MatDatepickerInputEvent<Date>){
    this.taskStartDate = event.value
  }

  selectDeadlineDate(event: MatDatepickerInputEvent<Date>){
    this.taskDeadlineDate = event.value
  }

  ngOnDestroy(){
    if(this.taskServiceSubscription != undefined)
      this.taskServiceSubscription.unsubscribe()
  }

}
