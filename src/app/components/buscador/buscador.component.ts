import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino:string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }



}
