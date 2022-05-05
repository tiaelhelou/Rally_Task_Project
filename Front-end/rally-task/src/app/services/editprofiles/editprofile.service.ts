import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface User {
  user_name : string,
  user_username : string,
  user_password : string,
  user_gender : string,
  user_date_of_birth : string,
  user_phone_number : number,
  user_interest_category: string
  
}

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  addUser(user:User){
    return this.http.post(this.url+ "Edit Profile.php", JSON.stringify(user));
  }
}
