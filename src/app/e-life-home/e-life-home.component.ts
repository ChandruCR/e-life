import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { global } from './../global';
import { DataService } from './../data.service';

@Component({
  selector: 'app-e-life-home',
  templateUrl: './e-life-home.component.html',
  styleUrls: ['./e-life-home.component.css']
})
export class ELifeHomeComponent implements OnInit {

  applications: any[];
  router: Router;
  data: DataService;
  username: string;

  constructor(_router: Router, _data:DataService) {
    this.data = _data;
    this.router = _router;
    this.applications = global.applications;
  }
  ngOnInit() {
    this.data.currentUsername.subscribe(username => this.username = username);
  }

  // this method will navigate user to the clicked application
  enterApplication(applicationName: String) {
    this.router.navigate(['/elife/'+applicationName.toLowerCase(), this.username]);
  }

}
