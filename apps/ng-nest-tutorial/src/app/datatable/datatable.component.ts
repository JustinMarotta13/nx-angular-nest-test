import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserTable } from '@justin-marotta/types';


@Component({
  selector: 'justin-marotta-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'state', 'age'];
  dataTable: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit: datatable');
    
  }

  addUser(user: User) {
    this.http
      .post<UserTable>('api/data/users', { user: user })
      .subscribe((userTable) => (this.dataTable = userTable.users));
  }
}
