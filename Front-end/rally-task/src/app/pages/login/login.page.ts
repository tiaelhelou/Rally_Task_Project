import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoginService, User } from '../../services/logins/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user: User;
  status: any;

  constructor(private router: Router, private service: LoginService, public toastController: ToastController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user = form.value;
    this.service.checkUser(this.user).subscribe (response => {this.status = response;} )

    if (this.status.status == true){
      this.router.navigate(['/home']);
    }
    else if (this.status.status == false){
      this.presentToast();
    }
  
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Incorrect Username and/or Password',
      duration: 2000
    });
    toast.present();
  }

}
