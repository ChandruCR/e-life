import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { global } from './../global';

@Component({
  selector: 'app-e-life-nav-bar',
  templateUrl: './e-life-nav-bar.component.html',
  styleUrls: ['./e-life-nav-bar.component.css']
})
export class ELifeNavBarComponent implements OnInit {

  router: Router;
  labels: any;

  constructor(_router: Router) {
    this.router = _router;
    this.labels = global.labels.navBar;
  }

  ngOnInit() {
  }

  // on click of eLife title user will be navigated to homepage or login page
  goHome(){
    if(global.username==""){
      this.router.navigate(["elife/login"])
    }else{
      this.router.navigate(["elife/"+global.username]);
    }
  }
  // this will reset username in global variable and navigate user to login page
  logout(){
    global.username = "";
    this.router.navigate(["elife/login"]);
  }

}
