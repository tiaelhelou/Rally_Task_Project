import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  constructor(private router: Router, private service: DisplayTaskService, private service2: DonetaskService, public toastController: ToastController,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.service.getTask().subscribe( response => {this.tasks = response;} );
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

  getId(val){
    const id = this.route.snapshot.queryParamMap.get('userid');

    this.service2.sendId(val, id).subscribe (response => {this.status = response;} );

    
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
