import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  user_username : string,
  user_password : string,
  
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  checkUser(user:User){
    return this.http.post(this.url+ "Login.php", JSON.stringify(user));
  }
}
