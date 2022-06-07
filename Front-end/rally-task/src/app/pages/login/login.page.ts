import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

    if (this.status.status > 0 && this.status.status != false){
      const params : NavigationExtras= {
        queryParams: {userid : this.status.status}
      }
         this.router.navigate(['/home'],params);
      

      console.log(this.status.status);
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
