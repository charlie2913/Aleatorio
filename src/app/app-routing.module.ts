import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {CuadradoComponent} from "./cuadrado/cuadrado.component";
import {ProductoComponent} from "./producto/producto.component";
import {LinealComponent} from "./lineal/lineal.component";
import {MultiplicativoComponent} from "./multiplicativo/multiplicativo.component";

const appRoutes: Routes = [
  {
  path: '',
  component: StartComponent
  },
  {
    path: 'cuadrado',
    component: CuadradoComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'lineal',
    component: LinealComponent
  },
  {
    path: 'multiplicativo',
    component: MultiplicativoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
