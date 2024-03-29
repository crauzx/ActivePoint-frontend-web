import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-reward-detail-dialog',
  templateUrl: './view-reward-detail-dialog.component.html',
  styleUrls: ['./view-reward-detail-dialog.component.sass']
})
export class ViewRewardDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
