import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ['./app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService, private router: Router) { }
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log('onSelect', hero);
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
      .catch(error => console.error('error', error));
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }



}
