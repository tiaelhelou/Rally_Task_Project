import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
