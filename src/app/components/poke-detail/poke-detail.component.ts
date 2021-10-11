import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];

  vida = 0;
  ataque = 0;
  defensa = 0;
  

  especialAtaque = 0;
  especialDefensa = 0;
  velocidad = 0;

  constructor(private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService) {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      resp => {
        console.log(resp);
        this.pokemon = resp;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = resp.types[0].type.name;
        this.vida = resp.stats[0].base_stat;
        this.ataque = resp.stats[1].base_stat;
        this.defensa = resp.stats[2].base_stat;
        this.especialAtaque = resp.stats[3].base_stat;
        this.especialDefensa = resp.stats[4].base_stat;
        this.velocidad = resp.stats[5].base_stat;
      },
      err => {
        console.log(err);
      }
    )
  }

}
