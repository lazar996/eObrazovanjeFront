import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginData } from '../interface/LoginData';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly loginPath: string = 'http://localhost:8080/api/login'

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(user: LoginData) {
    let contentHeader = new HttpHeaders();
    return this.http.post(this.loginPath, user, { headers: contentHeader, observe: 'response', responseType: 'text' }).pipe(map((res: any) => {
      let token = res['body'];
      if(token!=""){
        localStorage.setItem('currentUser',JSON.stringify({
          username:user.username,
          role:this.jwtUtilsService.getRoles(token),
          token:token
        }));
        return true;
      }
      return false;
    }));
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getRole():string{
    if(this.isLoggedIn()){
      return JSON.parse(localStorage.getItem('currentUser')).role;
    }
    return "notLoggedIn";
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') return true;
    else return false;
  }
}
