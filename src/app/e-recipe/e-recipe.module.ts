import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';;


import { ERecipeRoutingModule } from './e-recipe-routing.module';

import { ERecipeHomeComponent } from './e-recipe-home/e-recipe-home.component';

import { ERecipeService } from './e-recipe.service';
import { ERecipeAddComponent } from './e-recipe-add/e-recipe-add.component';
import { ERecipeViewComponent } from './e-recipe-view/e-recipe-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ERecipeRoutingModule
  ],
  declarations: [ERecipeHomeComponent, ERecipeAddComponent, ERecipeViewComponent],
  providers : [ERecipeService]
})
export class ERecipeModule { }
