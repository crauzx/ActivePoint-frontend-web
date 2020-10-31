import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { InsertTaskDialogComponent } from 'src/app/components/insert-task-dialog/insert-task-dialog.component';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.sass']
})
export class QuestComponent implements OnInit, OnDestroy {

  taskForm:FormGroup
  
  private taskServiceSubscription:Subscription

  constructor(private shareNavbar:ShareNavBarService, private dialog:MatDialog, private taskService:TaskService) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(1)
  }

  openInsertDialog(){
    const insertDialogRef = this.dialog.open(InsertTaskDialogComponent,{
      width: '500px'
    })
    insertDialogRef.afterClosed().subscribe( async res => {
      this.taskForm = res
      // console.log(this.taskForm.value)

      if(this.taskForm != undefined) {
        this.taskServiceSubscription = this.taskService.postTask(this.taskForm.value, localStorage.getItem('token')).subscribe( res => {
          window.location.reload();
        })
      }

    })
  }

  ngOnDestroy(){
    if(this.taskServiceSubscription != undefined)
      this.taskServiceSubscription.unsubscribe()
  }

}
