import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERecipeHomeComponent } from './e-recipe-home/e-recipe-home.component';
import { ERecipeAddComponent } from  './e-recipe-add/e-recipe-add.component';
import { ERecipeViewComponent } from  './e-recipe-view/e-recipe-view.component';



const routes: Routes = [
  { path: 'elife/erecipe/:username', component: ERecipeHomeComponent },
  { path: 'elife/erecipe/add/:username', component: ERecipeAddComponent },
  { path: 'elife/erecipe/view/:username/:recipeName', component: ERecipeViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ERecipeRoutingModule { }
