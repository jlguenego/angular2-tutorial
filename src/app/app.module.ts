import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { HeroService } from "./hero.service";

import { AppComponent } from './app.component';

import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from './hero-detail.component';



@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  declarations: [HeroDetailComponent, HeroesComponent, DashboardComponent, AppComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


