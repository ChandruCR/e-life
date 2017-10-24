import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ELifeHomeComponent } from './e-life-home/e-life-home.component';
import { ELifeLoginComponent } from './e-life-login/e-life-login.component';
    
const routes: Routes = [
    {path: 'elife/login', component: ELifeLoginComponent},
    {path: 'elife/:username', component: ELifeHomeComponent},
    {path: '', redirectTo: '/elife/login', pathMatch:'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }