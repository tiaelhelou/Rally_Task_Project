import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  private url: "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getRecommendedTask() {
    return this.http.get<[RecommendedTask]>(this.url + "Recommend Task.php");
  }

  getLeadboard() {
    return this.http.get<[Leadboard]>(this.url + "Leadboard Page.php");
  }
}
