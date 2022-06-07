import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DisplayleadboardService, Leadboard } from '../../services/displayleadrboards/displayleadboard.service';


@Component({
  selector: 'app-leadboard',
  templateUrl: './leadboard.page.html',
  styleUrls: ['./leadboard.page.scss'],
})
export class LeadboardPage implements OnInit {

  leadboards: Leadboard[];

  constructor(private router: Router, private service: DisplayleadboardService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getleadboard().subscribe( response => {this.leadboards = response;} );
    const id = this.route.snapshot.queryParamMap.get('userid');
    console.log(id);
  }

  goToHome(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/home'],params);
  }

  goToUser(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/userprofile'],params);
  }

  goToTask(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/task'],params);
  }

  goToRedeem() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/redeem'],params);
    
  }

}
