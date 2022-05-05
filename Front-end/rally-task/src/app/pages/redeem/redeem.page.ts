import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private service: DisplayredeemService, private service2: RedeemgiftService, public toastController: ToastController) { }

  ngOnInit() {
    this.service.getGift().subscribe ( response => {this.gifts = response;} )
    this.service.getPoint().subscribe ( response => {this.points = response;} )
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

  goToLeadboard() {
    this.router.navigate(['/leadboard']);
  }

  getId(val){
    this.service2.sendId(val).subscribe (response => {this.status = response;} )
    if (this.status.status == true){
      this.presentToast();
      this.router.navigate(['/redeem']);
    }
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Congratulations',
      duration: 2000
    });
    toast.present();
  }
}
