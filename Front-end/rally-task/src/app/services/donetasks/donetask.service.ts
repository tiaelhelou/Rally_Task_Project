import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DonetaskService {
  
  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  sendId(task_id, user_id){
   
    const done = {task_id: task_id, user_id: user_id};

    return this.http.post(this.url+ "Task Done.php", JSON.stringify(done));
  }
}
