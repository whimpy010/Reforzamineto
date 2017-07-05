import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  nombre:string = "Alexelcapo";
  nota:number = 10;
  visible:boolean = true;

  constructor() { }

  cambiar_nombre(){

    this.nombre = "Youtuber";

  }
}
