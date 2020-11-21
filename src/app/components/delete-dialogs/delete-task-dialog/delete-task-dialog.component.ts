import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.sass']
})
export class DeleteTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteTaskDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService:TaskService,
    private _snackBar: MatSnackBar) { }

  taskServiceSubscription:Subscription
  
  ngOnInit(): void {
  }

  onDeleteClick():void{
    console.log(this.data)
    this.taskServiceSubscription = this.taskService.deleteTask(this.data, localStorage.getItem('token')).subscribe( res => {
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.dialogRef.close(res)
      }
      console.log(res)
    })
  }

}
