import { Component } from '@angular/core';

import {YoutubersService} from "../../services/youtubers.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  constructor( private _ys:YoutubersService ) { }

}
