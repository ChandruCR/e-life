import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';
import { global } from './../global';
@Injectable()

export class ERecipeService {
  contentHeaders: any;
  constructor(private http: Http) {

    this.contentHeaders = new Headers();
    this.contentHeaders.append('Access-Control-Allow-Origin: *');
    this.contentHeaders.append('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.contentHeaders.append('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  }

  // this will make http get request to server and fetch all recipes for the logged in user
  getAllERecipes() {
    return this.http.get(environment.baseUrlForERecipe + "/" + global.username)
      .map(res => res.json())
  }

  // this will make http post request to server and save the recipe
  saveERecipe(eRecipe: any) {
    return this.http.post(environment.baseUrlForERecipe, eRecipe, this.contentHeaders)
      .map(res => res)
  }

  // this will make http get request to server and fetch a particular recipes details
  getERecipeDetails(recipeName: String) {
    return this.http.get(environment.baseUrlForERecipe + "/" + global.username + "/" + recipeName)
    .map(res => res.json())
  }
}