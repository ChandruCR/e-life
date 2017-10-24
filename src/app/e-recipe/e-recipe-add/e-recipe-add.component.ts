import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { global } from './../../global';

import { ERecipeService } from './../e-recipe.service';

@Component({
  selector: 'app-e-recipe-add',
  templateUrl: './e-recipe-add.component.html',
  styleUrls: ['./e-recipe-add.component.css']
})
export class ERecipeAddComponent implements OnInit {

  router: Router;
  eRecipeServie: ERecipeService;
  labels: any;
  placeHolders: any;
  eRecipeDetails = [];
  eRecipe = {
    recipeName: "",
    recipeType: "",
    username: "",
    eRecipeDetails: {
      info: {}
    }
  };
  
  constructor(_router: Router, _eRecipeServie: ERecipeService) {
    this.router = _router;
    this.eRecipeServie = _eRecipeServie;
  }

  ngOnInit() {
    this.placeHolders = global.placeHolders.addERecipe; // getting placeholders from global variable
    this.labels = global.labels.addERecipe; // getting labels from global variable
    this.eRecipe.username = global.username; // getting username from global variable
    this.eRecipeDetails.push({ title: "Description", value: "" });
  }

  // this method will add new info row 
  addERecipeDetails() {
    this.eRecipeDetails.push({ title: "", value: "" });
  }

  // this method will save the recipe to the server
  addERecipe() {
    if (this.eRecipe.recipeName != "" && this.eRecipe.recipeType != "") {
      this.eRecipeDetails.forEach((detail) => {
        this.eRecipe.eRecipeDetails.info[detail.title.toLowerCase()] = detail.value;
      });

      // saving recipe to the server.
      this.eRecipeServie.saveERecipe(this.eRecipe).  
        subscribe(data => {
          this.router.navigate(['/elife/erecipe', global.username]);
        },
        err => {
        });
    }
  }

  // this will navigate user to home screen
  returnHome() {
    this.router.navigate(['/elife/erecipe', global.username]);
  }
}
