import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  constructor(private http: HttpClient) { }

  // async getUserTable(): Promise<User[]> {
  //   return this.http
  //     .get<UserTable>('api/data/users')
  //     .subscribe((userTable) => (this.dataTable = userTable.users));
  // }
}
