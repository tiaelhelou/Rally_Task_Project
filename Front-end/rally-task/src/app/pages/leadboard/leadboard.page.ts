import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leadboard',
  templateUrl: './leadboard.page.html',
  styleUrls: ['./leadboard.page.scss'],
})
export class LeadboardPage implements OnInit {

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

  goToRedeem() {
    this.router.navigate(['/redeem']);
  }

}
