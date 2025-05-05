import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
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

  getUser(email: string | null): Observable<User>{
    return this.http.get<User>(this.BASE_URL+this.USERS_ENDPOINT+"/"+email);
  }

  addUser(student: User) {
    return this.http.post(this.BASE_URL + this.USERS_ENDPOINT, student);
  }
}
