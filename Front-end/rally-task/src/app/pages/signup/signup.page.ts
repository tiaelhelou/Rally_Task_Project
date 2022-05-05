import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignupService, User } from '../../services/signups/signup.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User;
  status: any;

  constructor(private router: Router, private service: SignupService, public toastController: ToastController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user = form.value;
    this.service.addUser(this.user).subscribe (response => {this.status = response;} )

    if (this.status.status == true){
      this.router.navigate(['/login']);
    }
    else if (this.status.status == false){
      this.presentToast();
    }
  
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid Information',
      duration: 2000
    });
    toast.present();
  }
}


