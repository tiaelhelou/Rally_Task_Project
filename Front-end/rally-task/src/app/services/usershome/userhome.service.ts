import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HomePage } from '../../pages/home/home.page';

export interface RecommendedTask {
  task_name : string
}

export interface Leadboard{
  user_name : string,
  user_points: number
}

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {
 
  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getRecommendedTask(user_id) {
    return this.http.get<[RecommendedTask]>(this.url + "Recommend Task.php?user_id=" + user_id );
  }

  getLeadboard() {
    return this.http.get<[Leadboard]>(this.url + "Leadboard Page Home.php");
  }
 
}
