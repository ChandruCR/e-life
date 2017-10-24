import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { global } from './../global';

@Component({
  selector: 'app-e-life-home',
  templateUrl: './e-life-home.component.html',
  styleUrls: ['./e-life-home.component.css']
})
export class ELifeHomeComponent implements OnInit {

  applications: any[];
  router: Router;
  constructor(_router: Router) {
    this.router = _router;
    this.applications = global.applications;
  }
  ngOnInit() {
  }

  // this method will navigate user to the clicked application
  enterApplication(applicationName: String) {
    this.router.navigate(['/elife/'+applicationName.toLowerCase(), global.username]);
  }

}
