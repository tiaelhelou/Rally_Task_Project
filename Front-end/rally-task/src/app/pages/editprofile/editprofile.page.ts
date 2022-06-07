import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EditprofileService, User } from '../../services/editprofiles/editprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  user: User;
  status: any;

  constructor(private router: Router, private service: EditprofileService, public toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('userid');
  }

  goToUser(){
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
    this.router.navigate(['/userprofile'],params);
  }

  goTologin() {
    this.router.navigate(['/welcome']);
  }

  onSubmit(form: NgForm) {
    const id = this.route.snapshot.queryParamMap.get('userid');
    const params : NavigationExtras= {
      queryParams: {userid : id}
    }
    
    this.user = form.value;
    this.service.addUser(this.user, id).subscribe (response => {this.status = response;} )

      this.presentToast();
      this.router.navigate(['/userprofile'],params);
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Updated Succefully',
      duration: 2000
    });
    toast.present();
  }
}