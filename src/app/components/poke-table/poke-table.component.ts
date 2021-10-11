import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons  = [];

  contador = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons(); 
  }

  getPokemons(){
    let  pokemonData;

    for(let i = 1; i <= 150; i++){
        this.contador = i;
        
      this.pokeService.getPokemons(i).subscribe(
        result =>{
          
          pokemonData = {
            position: i,
            image: result.sprites.front_default,
            name: result.name,
            type: result.types[0].type.name
          };
          console.log(pokemonData);
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
          
     
          
        },
        err =>{
          console.error(err);
        }
      );
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  getPoke(row: any){
    this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  }

}
