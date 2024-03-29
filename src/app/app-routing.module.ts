import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes) 
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
