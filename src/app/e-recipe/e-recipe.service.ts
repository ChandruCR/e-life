import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

@Injectable()
export class ERecipeService {

  contentHeaders: any;
  http: Http;

  constructor(_http: Http, ) {

    this.http = _http;
    this.contentHeaders = new Headers();
    this.contentHeaders.append('Access-Control-Allow-Origin: *');
    this.contentHeaders.append('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.contentHeaders.append('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  }

  // this will make http get request to server and fetch all recipes
  getAllERecipes() {
    return this.http.get(environment.baseUrlForERecipe + "/")
      .map(res => res.json())
  }

  // this will make http post request to server and save the recipe
  saveERecipe(eRecipe: any) {
    return this.http.post(environment.baseUrlForERecipe, eRecipe, this.contentHeaders)
      .map(res => res)
  }

  // this will make http get request to server and fetch a particular recipes details
  getERecipeDetails(username: String, recipeName: String) {
    return this.http.get(environment.baseUrlForERecipe + "/" + username + "/" + recipeName)
    .map(res => res.json())
  }

  // this will make http delete request to server and delete a recipe 
  deleteERecipe(username: String, recipeName: String){
    return this.http.delete(environment.baseUrlForERecipe + "/" + username + "/" + recipeName)
    .map(res => res)
  }
}