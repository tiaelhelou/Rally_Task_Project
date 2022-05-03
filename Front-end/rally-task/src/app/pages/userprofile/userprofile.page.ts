import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompletedTask, UndergoingTask, Username, UserprofileService } from '../../services/usersprofile/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  ctasks: CompletedTask[];
  utasks: UndergoingTask[];
  usernames: Username[];

  constructor(private router: Router, private service: UserprofileService) { }

  ngOnInit() {
    this.service.getCompletedTask().subscribe ( response => {this.ctasks = response;} )
    this.service.getUndergoingTask().subscribe ( response => {this.utasks = response;} )
    this.service.getUsername().subscribe ( response => {this.usernames = response;} )
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
