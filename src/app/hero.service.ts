import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Hero } from "./hero";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = '../ws/heroes';  // URL to web api
    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
    }

}
