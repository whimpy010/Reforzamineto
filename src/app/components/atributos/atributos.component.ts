import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  nombre_alt:string = "foto del candidato";
  url_imagen:string ="assets/perfil-candidato.jpg"

  constructor() { }

  ngOnInit() {
  }

}
