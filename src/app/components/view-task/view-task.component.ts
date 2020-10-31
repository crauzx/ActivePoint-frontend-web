import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.sass']
})
export class ViewTaskComponent implements OnInit, OnDestroy {

  tasks:Tasks[]
  private getAllTaskSubcription : Subscription

  dataSource: MatTableDataSource<Tasks>;
  displayedColumns: string[] = ['task_name', 'task_reward_point', 'task_start_date','task_deadline_date','edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.tasks = []
    this.getAllTaskSubcription = this.taskService.getAllTask().subscribe( res => {
      res.forEach(item => {
        this.tasks.push(new Tasks(item["id"], item["task_name"], item["description"], item["reward_point"], item["start_date"], item["deadline_date"]))
      })
      this.setDataSource()
    })
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.tasks)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  ngOnDestroy(){
    if(this.getAllTaskSubcription != undefined)
      this.getAllTaskSubcription.unsubscribe()
  }

}
