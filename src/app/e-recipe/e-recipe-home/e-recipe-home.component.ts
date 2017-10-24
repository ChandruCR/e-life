import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ERecipeService } from './../e-recipe.service';

import { global } from './../../global';

@Component({
  selector: 'app-e-recipe-home',
  templateUrl: './e-recipe-home.component.html',
  styleUrls: ['./e-recipe-home.component.css']
})
export class ERecipeHomeComponent implements OnInit {

  router: Router;
  eRecipeService: ERecipeService;
  allERecipes: any[];
  labels: any;


  constructor(_router: Router, _eRecipeServie: ERecipeService) {
    this.router = _router;
    this.eRecipeService = _eRecipeServie;
    this.labels = global.labels.eRecipeHome;
  }

  // this method will get all recipes listed for the logged in user
  ngOnInit() {
    this.eRecipeService.getAllERecipes().subscribe(data => {
      this.allERecipes = data;
    });
  }
  
  // this method will navigate user to add Recipe page
  addRecipe(){
    this.router.navigate(['/elife/erecipe/add', global.username]);
  }
  
  // this method will navigate user to page where details of recipe is displayed
  viewERecipeDetail(recipeName){
    this.router.navigate( ['elife/erecipe/view', global.username,recipeName]);
  }

  // this will navigate user to eLife home screen
  returnHome(){
    this.router.navigate(['/elife', global.username]);
  }

}
