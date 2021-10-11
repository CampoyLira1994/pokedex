import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  longText = `Hola, mi nombre es  Juan Antonio Campoy Lira,he trabajado como  frontend developer con responsive design,
  Mobile first, HTML5, CSS3, Angular con typescript o JavaScript, Boostrap, PrimeNG
  y del lado del BackEnd con C# ASP.Net Api REST`;

  constructor() { }

  ngOnInit(): void {
  }

}
