import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DisplayredeemService, Gift, Point } from '../../services/displayredeems/displayredeem.service';
import { RedeemgiftService } from '../../services/redeemgifts/redeemgift.service';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {

  gifts: Gift[];
  points: Point[];
  status: any;

  constructor(private router: Router, private service: DisplayredeemService, private service2: RedeemgiftService, public toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
   
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.service.getGift(id).subscribe ( response => {this.gifts = response;} )
    this.service.getPoint(id).subscribe ( response => {this.points = response;} )
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

  goToLeadboard() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
       this.router.navigate(['/leadboard'],params);
  }

  getId(val){
    const id = this.route.snapshot.queryParamMap.get('userid');

    this.service2.sendId(val, id).subscribe (response => {this.status = response;} )
  
      this.presentToast();

   
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Congratulations',
      duration: 2000
    });
    toast.present();
  }
}
