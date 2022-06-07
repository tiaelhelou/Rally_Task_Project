import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedeemgiftService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  sendId(gift_id, user_id){

    const redeemed = {gift_id: gift_id, user_id: user_id};

    return this.http.post(this.url+ "Redeem Gift.php", JSON.stringify(redeemed));
  }
}
