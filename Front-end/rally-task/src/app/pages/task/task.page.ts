import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayTaskService, Task } from '../../services/displaytasks/displaytask.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  tasks: Task[];

  constructor(private router: Router, private service: DisplayTaskService) { }

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
}
