import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { FormsModule } from '@angular/forms';
import { AtributosComponent } from './components/atributos/atributos.component';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';
import { HttpComponent } from './components/http/http.component';

//Servicios

import { YoutubersService } from './services/youtubers.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    YoutubersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
