import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface CompletedTask {
  task_name : string
}

export interface UndergoingTask {
  task_name : string
}

export interface Username {
  user_username : string
}

@Injectable({
  providedIn: 'root'
})
export class UserprofileService{

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getCompletedTask(user_id) {
    return this.http.get<[CompletedTask]>(this.url + "Profile Page CompletedTask.php?user_id=" + user_id);
  }

  getUndergoingTask() {
    return this.http.get<[UndergoingTask]>(this.url + "Profile Page UndergoingTask.php");
  }

  getUsername(user_id) {
    return this.http.get<[Username]>(this.url + "Profile Page Username.php?user_id=" + user_id);
  }
}
