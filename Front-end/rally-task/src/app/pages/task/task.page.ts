import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goToRedeem(){
    this.router.navigate(['/redeem']);
  }

  goToLeadboard() {
    this.router.navigate(['/leadboard']);
  }
}
