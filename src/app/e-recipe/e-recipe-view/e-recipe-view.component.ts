import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { global } from './../../global';
import { DataService } from './../../data.service';
import { ERecipeService } from './../e-recipe.service';

@Component({
  selector: 'app-e-recipe-view',
  templateUrl: './e-recipe-view.component.html',
  styleUrls: ['./e-recipe-view.component.css']
})
export class ERecipeViewComponent implements OnInit {

  router: Router;
  data: DataService;
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

  constructor(_router: Router, _route: ActivatedRoute, _eRecipeService: ERecipeService, _data:DataService) {
    this.router = _router;
    this.route = _route;
    this.data = _data;
    this.eRecipeService = _eRecipeService;
    this.labels = global.labels.viewERecipe; // getting label values from global variable
  }

  ngOnInit() {
    this.data.currentUsername.subscribe(username => this.username = username); // logged in users  username from DataService
    this.eRecipe.username = this.route.snapshot.params['username']; // getting recipe owners username
    this.recipeName = this.route.snapshot.params['recipeName']; // getting recipeName from routeparams
    this.eRecipeService.getERecipeDetails(this.eRecipe.username, this.recipeName) // getting recipe details from server and assigning to variable
      .subscribe(data => {
        this.eRecipe = data;
        let titles = Object.keys(this.eRecipe.eRecipeDetails.info);
        titles.forEach((title) => {
          this.eRecipeDetails.push({ "title": title, "value": this.eRecipe.eRecipeDetails.info[title] });
        })
      });
  }

  // this will delete the recipe and navigate to eRecipeHome
  deleteRecipe(){
    this.eRecipeService.deleteERecipe(this.username, this.eRecipe.recipeName)
      .subscribe(data => {
        this.router.navigate(['/elife/erecipe', this.username]);
      },
      err => {
      });
  }

  // this will navigate user to eRecipe Home screen
  returnHome() {
    this.router.navigate(['/elife/erecipe', this.username]);
  }
}

