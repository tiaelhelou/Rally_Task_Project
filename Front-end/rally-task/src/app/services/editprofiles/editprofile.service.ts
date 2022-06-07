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

  addUser(user:User, user_id){

    const update = {user_name: user.user_name, user_username: user.user_username, user_password: user.user_password,
      user_gender: user.user_gender, user_date_of_birth: user.user_date_of_birth, user_phone_number: user.user_phone_number, 
      user_interest_category: user.user_interest_category, user_id: user_id};

    return this.http.post(this.url+ "Edit Profile.php", JSON.stringify(update));
  }
}
