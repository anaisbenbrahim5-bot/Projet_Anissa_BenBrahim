import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { Observable } from 'rxjs';
import { User } from '../models/user';
const URL_API="http://localhost:3000/user/1";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http:HttpClient=inject(HttpClient);
  public getUser():Observable<User>{
    return this.http.get<User>(URL_API);
  }
  public newPassword(password:string):Observable<User>{
    return this.http.put<User>(URL_API,{
      username:"admin",
      password:password});
  }
}
