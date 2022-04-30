import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTAsk(){
    this.router.navigate(['/task']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToRedeem(){
    this.router.navigate(['/redeem']);
  }

  goToLeadboard() {
    this.router.navigate(['/leadboard']);
  }

  goToeditProfile(){
    this.router.navigate(['/editprofile']);
  }

}
