import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ShareTasks } from 'src/app/models/share_tasks';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { ShareTaskService } from 'src/app/services/share_task/share-task.service';

@Component({
  selector: 'app-view-share-task',
  templateUrl: './view-share-task.component.html',
  styleUrls: ['./view-share-task.component.sass']
})
export class ViewShareTaskComponent implements OnInit {

  shareTask:ShareTasks[]
  private getAllShareTaskSubcription : Subscription

  dataSource = new MatTableDataSource<ShareTasks>()
  displayedColumns: string[] = ['task_name', 'share_task_date', 'publisher', 'taken_date', 'taker','task_status', 'edit']

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private shareTaskService:ShareTaskService, private _snackBar: MatSnackBar, private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    this.getAllShareTask()
  }

  getAllShareTask(){
    this.shareTask = []
    if (this.getAllShareTaskSubcription && !this.getAllShareTaskSubcription.closed) {
      this.getAllShareTaskSubcription.unsubscribe()
    }

    this.getAllShareTaskSubcription = this.shareTaskService.getAllShareTask(localStorage.getItem('token')).subscribe( res => {
      console.log(res)
      this.dataSource.data = res as ShareTasks[]
      res.forEach(item => {
        this.shareTask.push(new ShareTasks(item["id"], item["taken_task_id"], item["user_id"], item["share_date"], item["admin_approval"]))
      })
      this.setDataSource()
      this.progressBar.setShow(false)
    })
  }

  setDataSource(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  onApproveClick(idx){
    console.log(this.shareTask[idx]["id"])
    let value = { 'shared_task_id' : this.shareTask[idx]["id"] }
    this.shareTaskService.postApproveShareTask(value, localStorage.getItem('token')).subscribe( res => {
      console.log(res)
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.getAllShareTask()
      }
    })
  }

  onDeclineClick(idx){
    let value = { 'shared_task_id' : this.shareTask[idx]["id"] }
    this.shareTaskService.postDeclineShareTask(value, localStorage.getItem('token')).subscribe( res => {
      console.log(res)
      if(res["message"]){
        this._snackBar.open(res["message"].toUpperCase(), "", { duration: 2000 })
        this.getAllShareTask()
      }
    })
  }

  ngOnDestroy(){
    if(this.getAllShareTaskSubcription != undefined)
      this.getAllShareTaskSubcription.unsubscribe()
  }

}
