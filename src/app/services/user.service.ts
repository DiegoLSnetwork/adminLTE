import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:3000/users";
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  userList() {
    return this.http.get<User[]>(this.URL_API);
  }
}
