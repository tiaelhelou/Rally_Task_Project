import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedeemgiftService {

  private url= "http://localhost/RallyTask/";

  constructor(private http: HttpClient) { }

  sendId(id:number){
    return this.http.post(this.url+ "Redeem Gift.php", JSON.stringify(id));
  }
}
