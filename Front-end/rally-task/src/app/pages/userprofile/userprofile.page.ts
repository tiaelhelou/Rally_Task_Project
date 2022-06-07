import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  constructor(private router: Router, private service: UserprofileService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.service.getCompletedTask(id).subscribe ( response => {this.ctasks = response;} )
    this.service.getUndergoingTask().subscribe ( response => {this.utasks = response;} )
    this.service.getUsername(id).subscribe ( response => {this.usernames = response;} )
  }

  goToTAsk(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/task'],params);
  }

  goToHome(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/home'],params);
  }

  goToRedeem(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/redeem'],params);
  }

  goToLeadboard() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/leadboard'],params);
  
  }

  goToeditProfile(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/editprofile'],params);
   
  }

}
