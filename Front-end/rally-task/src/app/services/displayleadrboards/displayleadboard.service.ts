import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Leadboard{
  user_name : string,
  user_points: number
}

@Injectable({
  providedIn: 'root'
})
export class DisplayleadboardService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getleadboard() {
    return this.http.get<[Leadboard]>(this.url + "Leadboard Page.php");
  }
}
