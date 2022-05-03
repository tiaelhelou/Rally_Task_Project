import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayredeemService, Gift, Point } from '../../services/displayredeems/displayredeem.service';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {

  gifts: Gift[];
  points: Point[];

  constructor(private router: Router, private service: DisplayredeemService) { }

  ngOnInit() {
    this.service.getGift().subscribe ( response => {this.gifts = response;} )
    this.service.getPoint().subscribe ( response => {this.points = response;} )
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goToTask(){
    this.router.navigate(['/task']);
  }

  goToLeadboard() {
    this.router.navigate(['/leadboard']);
  }

}
