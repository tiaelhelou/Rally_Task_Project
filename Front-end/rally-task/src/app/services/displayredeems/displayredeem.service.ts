import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Gift {
  gift_id: number,
  gift_name : string,
  gift_points: number
}

export interface Point{
  user_points: number
}

@Injectable({
  providedIn: 'root'
})
export class DisplayredeemService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  getGift(user_id) {
    return this.http.get<[Gift]>(this.url + "Redeem Page Gift.php?user_id=" + user_id);
  }

  getPoint(user_id) {
    
    return this.http.get<[Point]>(this.url + "Redeem Page Point.php?user_id=" + user_id);
  }
}
