import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { global } from './../global';
import { DataService } from './../data.service';

@Component({
  selector: 'app-e-life-nav-bar',
  templateUrl: './e-life-nav-bar.component.html',
  styleUrls: ['./e-life-nav-bar.component.css']
})
export class ELifeNavBarComponent implements OnInit {

  router: Router;
  data: DataService;
  labels: any;
  username: string;

  constructor(_router: Router, _data:DataService) {
    this.data = _data;
    this.router = _router;
    this.labels = global.labels.navBar;
  }

  ngOnInit() {
    this.data.currentUsername.subscribe(username => this.username = username);
  }

  // on click of eLife title user will be navigated to homepage or login page
  goHome(){
    if(this.username==""){
      this.router.navigate(["elife/login"])
    }else{
      this.router.navigate(["elife/"+this.username]);
    }
  }
  // this will reset username in global variable and navigate user to login page
  logout(){
    this.data.changeUsername("");
    this.router.navigate(["elife/login"]);
  }

}
