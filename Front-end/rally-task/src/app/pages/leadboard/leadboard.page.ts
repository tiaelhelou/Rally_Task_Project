import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayleadboardService, Leadboard } from '../../services/displayleadrboards/displayleadboard.service';


@Component({
  selector: 'app-leadboard',
  templateUrl: './leadboard.page.html',
  styleUrls: ['./leadboard.page.scss'],
})
export class LeadboardPage implements OnInit {

  leadboards: Leadboard[];

  constructor(private router: Router, private service: DisplayleadboardService) { }

  ngOnInit() {
    this.service.getleadboard().subscribe( response => {this.leadboards = response;} );
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
