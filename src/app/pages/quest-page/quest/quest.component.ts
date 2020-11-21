import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InsertTaskDialogComponent } from 'src/app/components/insert-dialogs/insert-task-dialog/insert-task-dialog.component';
import { ViewTaskComponent } from 'src/app/components/views/view-task/view-task.component';
import { ShareNavBarService } from 'src/app/services/navbar/share-nav-bar.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.sass']
})
export class QuestComponent implements OnInit {

  @ViewChild(ViewTaskComponent) viewTaskComponent:ViewTaskComponent
  taskForm:FormGroup

  constructor(private shareNavbar:ShareNavBarService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.shareNavbar.setNavActiveNumber(1)
  }

  openInsertDialog(){
    const insertDialogRef = this.dialog.open(InsertTaskDialogComponent,{
      width: '500px'
    })

    insertDialogRef.afterClosed().subscribe( async res => {
      this.taskForm = res
      if(this.taskForm != undefined) {
        this.viewTaskComponent.getTasks()
      }
    })
  }

}
