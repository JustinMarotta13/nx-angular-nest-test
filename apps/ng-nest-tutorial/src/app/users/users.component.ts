import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserBody } from '@justin-marotta/types';

@Component({
  selector: 'justin-marotta-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInt: users');
  }

  addUser(position: number, name: string, state: string, age: number) {
    const body: UserBody = {
      position: position,
      name: name,
      state: state,
      age: age
    }
    this.http.post('api/data/users', body).subscribe();
    
  }
}
