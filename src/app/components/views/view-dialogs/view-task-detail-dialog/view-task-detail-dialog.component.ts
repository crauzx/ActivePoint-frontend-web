import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task-detail-dialog',
  templateUrl: './view-task-detail-dialog.component.html',
  styleUrls: ['./view-task-detail-dialog.component.sass']
})
export class ViewTaskDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
