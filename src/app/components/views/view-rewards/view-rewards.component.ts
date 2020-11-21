import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Rewards } from 'src/app/models/rewards';

@Component({
  selector: 'app-view-rewards',
  templateUrl: './view-rewards.component.html',
  styleUrls: ['./view-rewards.component.sass']
})
export class ViewRewardsComponent implements OnInit {

  rewards:Rewards[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Rewards>;
  displayedColumns: string[] = ['reward_type_name', 'reward_quantity', 'reward_claim_point','edit'];

  constructor() { }

  ngOnInit(): void {
    this.getReward()
  }

  getReward(){
    this.rewards = []
    this.setDataSource()
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.rewards)
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

}
