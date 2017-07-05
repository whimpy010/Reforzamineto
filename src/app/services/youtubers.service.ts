import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class YoutubersService {

  youtubers:any[] = [];

  constructor(private http:Http) {

    console.log ("servicio de youtubes funciona");
    this.cargar_youtubers();
  }

cargar_youtubers(){

  this.http.get ("../assets/mutantes.json")
            .subscribe( respuesta =>{

              var data = respuesta.json();
              console.log(data);
              this.youtubers = data.youtubers;
            })

}

}
