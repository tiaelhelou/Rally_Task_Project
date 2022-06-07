import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Leadboard, RecommendedTask, UserhomeService } from '../../services/usershome/userhome.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rtasks: RecommendedTask[];
  leadboards: Leadboard[];
  status: any;

  
  constructor(private router: Router, private service: UserhomeService,private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.service.getRecommendedTask(id).subscribe ( response => {this.rtasks = response;} )
    this.service.getLeadboard().subscribe ( response => {this.leadboards = response;} )
    

  }

  goToTAsk(){
    
    const id = this.route.snapshot.queryParamMap.get('userid');
    
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/task'],params);
  
    
  }

  goToUser(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/userprofile'],params);
    

   
   
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
  
}
