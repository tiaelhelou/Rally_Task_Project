import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Leadboard, RecommendedTask, UserhomeService } from '../../services/usershome/userhome.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rtasks: RecommendedTask[];
  leadboards: Leadboard[];

  constructor(private router: Router, private service: UserhomeService) {}
  
  ngOnInit() {
    this.service.getRecommendedTask().subscribe ( response => {this.rtasks = response;} )
    this.service.getLeadboard().subscribe ( response => {this.leadboards = response;} )
  }

  goToTAsk(){
    this.router.navigate(['/task']);
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
