import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goTologin() {
    this.router.navigate(['/login']);
  }

}
