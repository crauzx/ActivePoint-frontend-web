import { formatDate, Time } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-task-dialog',
  templateUrl: './insert-task-dialog.component.html',
  styleUrls: ['./insert-task-dialog.component.sass']
})
export class InsertTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InsertTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  taskName:String
  taskDescription:String
  taskRewardPoint:Number
  taskStartDate:Date
  taskStartTime:Time
  taskDeadlineDate:Date
  taskDeadlineTime:Time
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
    this.dialogRef.close(this.taskForm)
  }

  private getDate(date:Date, time:Time){
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

}
