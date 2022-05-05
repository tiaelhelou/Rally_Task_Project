import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonetaskService {

  
  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  sendId(id:number){
    return this.http.post(this.url+ "Task Done.php", JSON.stringify(id));
  }
}
