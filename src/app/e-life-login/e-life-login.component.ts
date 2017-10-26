import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { global } from './../global';
import { DataService } from './../data.service';

@Component({
  selector: 'app-e-life-login',
  templateUrl: './e-life-login.component.html',
  styleUrls: ['./e-life-login.component.css']
})
export class ELifeLoginComponent implements OnInit {

  username: string;
  router: Router
  data: DataService;
  labels: any;
  placeHolders: any;

  constructor(_router: Router, _data:DataService) {
    this.router = _router;
    this.data = _data;
    this.placeHolders = global.placeHolders.login;
    this.labels = global.labels.login;
  }
  
  ngOnInit() {
    this.username = "";
  }

  // this function will navigate to elife home page if username is provided
  // it will set username in global variable
  login() {
    if (this.username != "") {
      this.data.changeUsername(this.username);
      this.router.navigate(['/elife', this.username]);
    }
  }

}
