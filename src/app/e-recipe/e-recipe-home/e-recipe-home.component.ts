import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ERecipeService } from './../e-recipe.service';
import { global } from './../../global';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-e-recipe-home',
  templateUrl: './e-recipe-home.component.html',
  styleUrls: ['./e-recipe-home.component.css']
})
export class ERecipeHomeComponent implements OnInit {

  router: Router;
  data: DataService;
  eRecipeService: ERecipeService;
  allERecipes: any[];
  labels: any;
  username: string;


  constructor(_router: Router, _eRecipeServie: ERecipeService, _data: DataService) {
    this.router = _router;
    this.data = _data;
    this.eRecipeService = _eRecipeServie;
    this.labels = global.labels.eRecipeHome;
  }

  // this method will get all recipes listed for the logged in user
  ngOnInit() {
    this.eRecipeService.getAllERecipes().subscribe(data => {
      this.allERecipes = data;
    });
    this.data.currentUsername.subscribe(username => this.username = username);
  }
  
  // this method will navigate user to add Recipe page
  addRecipe(){
    this.router.navigate(['/elife/erecipe/add', this.username]);
  }
  
  // this method will navigate user to page where details of recipe is displayed
  viewERecipeDetail(username, recipeName){
    this.router.navigate( ['elife/erecipe/view',username,recipeName]);
  }

  // this will navigate user to eLife home screen
  returnHome(){
    this.router.navigate(['/elife', this.username]);
  }

}
