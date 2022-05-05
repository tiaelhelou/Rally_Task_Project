import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private service: EditprofileService, public toastController: ToastController) { }

  ngOnInit() {
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goTologin() {
    this.router.navigate(['/login']);
  }

  onSubmit(form: NgForm) {
    this.user = form.value;
    this.service.addUser(this.user).subscribe (response => {this.status = response;} )

    if (this.status.status == true){
      this.presentToast();
      this.router.navigate(['/userprofile']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Updated Succefully',
      duration: 2000
    });
    toast.present();
  }
}
