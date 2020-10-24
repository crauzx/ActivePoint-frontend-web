import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/model/users';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.sass']
})
export class ViewUserComponent implements OnInit, AfterViewInit {

  users:Users[]

  dataSource: MatTableDataSource<Users>;
  displayedColumns: string[] = ['email', 'role', 'point','edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  private tempSeed(){
    this.users = []
    this.users.push(new Users("test1@binus.edu", "Tester", 10))
    this.users.push(new Users("tester2@binus.edu", "Tester", 10))
    this.users.push(new Users("test3@binus.edu", "Tester", 5))
    this.users.push(new Users("tester4@binus.edu", "Tester", 1))
    this.users.push(new Users("test5@binus.edu", "Tester", 10))
    this.users.push(new Users("tester6@binus.edu", "Tester", 7))
  }

  ngOnInit(): void {
    this.tempSeed()
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
