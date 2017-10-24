import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { global } from './../../global';

import { ERecipeService } from './../e-recipe.service';

@Component({
  selector: 'app-e-recipe-view',
  templateUrl: './e-recipe-view.component.html',
  styleUrls: ['./e-recipe-view.component.css']
})
export class ERecipeViewComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  eRecipeService: ERecipeService;
  recipeName: String;
  username: String;
  eRecipe = {
    recipeName: "",
    recipeType: "",
    username: "",
    eRecipeDetails: {
      info: {}
    }
  };
  eRecipeDetails = [];
  labels: any;

  constructor(_router: Router, _route: ActivatedRoute, _eRecipeService: ERecipeService) {
    this.router = _router;
    this.route = _route;
    this.eRecipeService = _eRecipeService;
    this.labels = global.labels.viewERecipe; // getting label values from global variable
  }

  ngOnInit() {
    this.recipeName = this.route.snapshot.params['recipeName']; // getting recipeName from routeparams
    this.eRecipeService.getERecipeDetails(this.recipeName) // getting recipe details from server and assigning to variable
      .subscribe(data => {
        this.eRecipe = data;
        let titles = Object.keys(this.eRecipe.eRecipeDetails.info);
        titles.forEach((title) => {
          this.eRecipeDetails.push({ "title": title, "value": this.eRecipe.eRecipeDetails.info[title] });
        })
      });
  }

  // this will navigate user to eRecipe Home screen
  returnHome() {
    this.router.navigate(['/elife/erecipe', global.username]);
  }
}

