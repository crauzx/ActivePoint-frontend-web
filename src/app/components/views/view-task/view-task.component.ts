import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { TaskService } from 'src/app/services/task/task.service';
import { DeleteTaskDialogComponent } from '../../delete-dialogs/delete-task-dialog/delete-task-dialog.component';
import { UpdateTaskDialogComponent } from '../../update-dialogs/update-task-dialog/update-task-dialog.component';
import { ViewTaskDetailDialogComponent } from '../view-dialogs/view-task-detail-dialog/view-task-detail-dialog.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.sass']
})
export class ViewTaskComponent implements OnInit, OnDestroy{

  tasks:Tasks[]
  private getAllTaskSubcription : Subscription

  dataSource = new MatTableDataSource<Tasks>()
  displayedColumns: string[] = ['task_name', 'task_reward_point', 'task_start_date','task_deadline_date','edit']

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private taskService:TaskService, private dialog:MatDialog, private progressBar:ProgressBarService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.tasks = []
    if (this.getAllTaskSubcription && !this.getAllTaskSubcription.closed) {
      this.getAllTaskSubcription.unsubscribe()
    }

    this.getAllTaskSubcription = this.taskService.getAllTask(localStorage.getItem('token')).subscribe( res => {
      this.progressBar.setShow(false)
      this.dataSource.data = res as Tasks[]
      res.forEach(item => {
        this.tasks.push(new Tasks(item["id"], item["task_name"], item["description"], item["reward_point"], item["start_date"], item["deadline_date"], item["slot"]))
      })
      this.setDataSource()
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

  openUpdateDialog(idx){
    console.log(this.tasks[idx])
    const updateDialogRef = this.dialog.open(UpdateTaskDialogComponent,{
      width: '500px',
      data: this.tasks[idx]
    })

    updateDialogRef.afterClosed().subscribe( async res => {
      if(res != undefined) {
        this.getTasks()
      }
    })
  }

  openDetailDialog(idx){
    this.dialog.open(ViewTaskDetailDialogComponent,{
      width: '500px',
      data: this.tasks[idx]
    })
  }

  openDeleteDialog(id){
    const deleteDialogRef = this.dialog.open(DeleteTaskDialogComponent,{
      data: id
    })
    deleteDialogRef.afterClosed().subscribe( async res => {
      if(res != undefined) {
        this.getTasks()
      }
    })
  }

  ngOnDestroy(){
    if(this.getAllTaskSubcription != undefined)
      this.getAllTaskSubcription.unsubscribe()
  }

}