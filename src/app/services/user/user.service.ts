import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ANTI_CORS = 'https://cors-anywhere.herokuapp.com/';
  readonly BASE_URL = 'https://68109d8127f2fdac241212a7.mockapi.io/';
  readonly USERS_ENDPOINT = "users/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL+this.USERS_ENDPOINT);
  }

  getUser(email: string): Observable<User | null> {
    const url = `${this.BASE_URL}${this.USERS_ENDPOINT}?email=${email}`;
    return this.http.get<User[]>(url).pipe(
      map(users => users.length > 0 ? users[0] : null)
    );
  }

  addUser(student: User) {
    return this.http.post(this.BASE_URL + this.USERS_ENDPOINT, student);
  }
}
