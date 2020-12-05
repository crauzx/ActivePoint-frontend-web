import { formatDate } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class UpdateTaskDialogComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<UpdateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService:TaskService, 
    private _snackBar: MatSnackBar) { }

  taskServiceSubscription:Subscription
  temp_start_date: Date
  temp_deadline_date: Date

  taskForm = new FormGroup({
    task_id : new FormControl(''),
    task_name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    reward_point: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    deadline_date: new FormControl('', [Validators.required]),
    slot: new FormControl('', [Validators.required]),
    start_time: new FormControl('', [Validators.required]),
    deadline_time: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.setFormValue()
  }

  splitDateAndTime(val:Date){
    let date_str = new String(val)
    let date_split = date_str.split(' ')
    return date_split
  }

  private getDate(date:Date, time:String){
    const format = 'yyyy-MM-dd'
    const locale = 'en-US'
    return `${formatDate(date, format, locale)} ${time}`
  }

  private setFormValue(){
    let startDate = this.splitDateAndTime(this.data.start_date)
    let deadlineDate = this.splitDateAndTime(this.data.deadline_date)

    this.taskForm.setValue({
      task_id : this.data.task_id,
      task_name: this.data.task_name,
      description:  this.data.description,
      reward_point: this.data.reward_point,
      start_date: startDate[0],
      deadline_date: deadlineDate[0],
      start_time: startDate[1],
      deadline_time: deadlineDate[1],
      slot: this.data.slot
    })
  }

  patchFormValue(){
    this.temp_start_date = this.taskForm.get('start_date').value
    this.temp_deadline_date = this.taskForm.get('deadline_date').value

    this.taskForm.patchValue({
      start_date: this.getDate(this.taskForm.get('start_date').value, this.taskForm.get('start_time').value),
      deadline_date: this.getDate(this.taskForm.get('deadline_date').value, this.taskForm.get('deadline_time').value)
    })
  }

  onSubmit(){
    this.patchFormValue()
    this.taskServiceSubscription = this.taskService.putTask(this.taskForm.value, localStorage.getItem('token')).subscribe( res => {
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.dialogRef.close(this.taskForm)
      }
    })
    this.taskForm.patchValue({
      start_date: this.temp_start_date,
      deadline_date: this.temp_deadline_date
    })
  }

  ngOnDestroy(){
    if(this.taskServiceSubscription != undefined)
      this.taskServiceSubscription.unsubscribe()
  }

}
