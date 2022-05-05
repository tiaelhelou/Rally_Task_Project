import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DisplayTaskService, Task } from '../../services/displaytasks/displaytask.service';
import { DonetaskService } from '../../services/donetasks/donetask.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  tasks: Task[];
  status: any;

  constructor(private router: Router, private service: DisplayTaskService, private service2: DonetaskService, public toastController: ToastController) { }

  ngOnInit() {
    this.service.getTask().subscribe( response => {this.tasks = response;} );
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToUser(){
    this.router.navigate(['/userprofile']);
  }

  goToRedeem(){
    this.router.navigate(['/redeem']);
  }

  goToLeadboard() {
    this.router.navigate(['/leadboard']);

  }

  getId(val){
    this.service2.sendId(val).subscribe (response => {this.status = response;} )
    if (this.status.status == true){
      this.presentToast();
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
