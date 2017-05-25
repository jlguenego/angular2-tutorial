import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from "./hero.service";

import { AppComponent } from './app.component';


import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";


import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
  ])],
  declarations: [HeroDetailComponent, HeroesComponent, DashboardComponent, AppComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


