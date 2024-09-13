import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { ProductoComponent } from './producto/producto.component';
import { LinealComponent } from './lineal/lineal.component';
import { MultiplicativoComponent } from './multiplicativo/multiplicativo.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CuadradoComponent,
    ProductoComponent,
    LinealComponent,
    MultiplicativoComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
