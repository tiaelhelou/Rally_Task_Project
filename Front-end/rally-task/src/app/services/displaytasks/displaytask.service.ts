import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Task{
  task_name : string,
  task_points: number
}

@Injectable({
  providedIn: 'root'
})
export class DisplayTaskService {

  private url: "http://localhost:80/Rally_Task/";

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<[Task]>(this.url + "Task Page.php");
  }
}
