import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/models/users';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.sass']
})
export class ViewUserComponent implements OnInit, AfterViewInit {

  @Input() users:Users[]

  dataSource: MatTableDataSource<Users>;
  displayedColumns: string[] = ['email', 'role', 'point'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users)
  }

  ngAfterViewInit() {
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
