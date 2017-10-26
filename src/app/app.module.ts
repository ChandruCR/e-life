import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ERecipeModule } from './e-recipe/e-recipe.module';

import { AppComponent } from './app.component';
import { ELifeHomeComponent } from './e-life-home/e-life-home.component';
import { ELifeNavBarComponent } from './e-life-nav-bar/e-life-nav-bar.component';
import { ELifeLoginComponent } from './e-life-login/e-life-login.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ELifeHomeComponent,
    ELifeNavBarComponent,
    ELifeLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ERecipeModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
