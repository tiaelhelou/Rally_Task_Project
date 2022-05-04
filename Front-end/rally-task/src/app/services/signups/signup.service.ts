import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  user_name : string,
  user_username : string,
  user_password : string,
  user_gender : string,
  user_date_of_birth : string,
  user_phone_number : string
  
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  addUser(user:User){
    return this.http.post(this.url+ "Sign up.php", JSON.stringify(user));
  }
    
}
