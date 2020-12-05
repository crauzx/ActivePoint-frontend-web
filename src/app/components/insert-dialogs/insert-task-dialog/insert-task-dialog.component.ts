import { formatDate, Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-insert-task-dialog',
  templateUrl: './insert-task-dialog.component.html',
  styleUrls: ['./insert-task-dialog.component.sass']
})
export class InsertTaskDialogComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<InsertTaskDialogComponent>, private taskService:TaskService
    , private _snackBar: MatSnackBar) { }

  taskServiceSubscription:Subscription

  temp_start_date : Date
  temp_deadline_date : Date

  taskForm = new FormGroup({
    task_name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    reward_point: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    deadline_date: new FormControl('', Validators.required),
    slot: new FormControl('', Validators.required),
    start_time: new FormControl('', Validators.required),
    deadline_time: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  onSubmit(){
    try {
      this.changeFormValue()
      this.taskServiceSubscription = this.taskService.postTask(this.taskForm.value, localStorage.getItem('token')).subscribe( res => {
        if(res["message"]){
          this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
          this.dialogRef.close(this.taskForm)
        }
      })
      this.taskForm.patchValue({
        start_date: this.temp_start_date,
        deadline_date: this.temp_deadline_date
      })
    } catch (error) {}
  }

  private getDate(date:Date, time:String){
    const format = 'yyyy-MM-dd'
    const locale = 'en-US'
    return `${formatDate(date, format, locale)} ${time}`
  }

  private changeFormValue(){
    this.temp_start_date = this.taskForm.get('start_date').value
    this.temp_deadline_date = this.taskForm.get('deadline_date').value

    this.taskForm.patchValue({
      start_date: this.getDate(this.taskForm.get('start_date').value, this.taskForm.get('start_time').value),
      deadline_date: this.getDate(this.taskForm.get('deadline_date').value, this.taskForm.get('deadline_time').value)
    })
  }

  ngOnDestroy(){
    if(this.taskServiceSubscription != undefined)
      this.taskServiceSubscription.unsubscribe()
  }

}
