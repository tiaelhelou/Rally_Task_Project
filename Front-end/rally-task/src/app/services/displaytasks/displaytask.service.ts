import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Task{
  task_id: number,
  task_name : string,
  task_points: number
}

@Injectable({
  providedIn: 'root'
})
export class DisplayTaskService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<[Task]>(this.url + "Task Page.php?task_id=" + task_id);
  }

}
