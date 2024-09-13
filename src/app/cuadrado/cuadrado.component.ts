import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent {
  x0: number | null = null;
  n: number | null = null;
  displayedColumns: string[] = ['i', 'yi', 'op', 'xi', 'ri'];
  dataSource: Array<{ i: number, yi: number, op: number, xi: number, ri: number }> = [];
  degeneracionMessage: string | null = null;
  generarNumeros(): void {
    if (this.x0 === null || this.n === null) {
      this.degeneracionMessage = 'Por favor, introduzca valores válidos para X0 y X1.';
      return;
    }
    const numDigits = this.x0.toString().length;
    let aux:string = this.x0.toString();
    let xi = this.x0;
    let results = [];
    let seenValues = new Map<number, number>(); // Para rastrear valores y sus iteraciones
    let degeneracionFound = false; // Para verificar si se encontró degeneración

    for (let i = 0; i < this.n; i++) {
      const yi = xi;
      let xiSquared = (yi * yi).toString();
      if(aux.length % 2 !== 0){
        // Si el número de dígitos es impar, añadir un '0' al inicio
        if (xiSquared.length % 2 == 0) {
          xiSquared = '0' + xiSquared;
        }
      }else{
        // Si el número de dígitos es impar, añadir un '0' al inicio
        if (xiSquared.length % 2 !== 0) {
          xiSquared = '0' + xiSquared;
        }
      }



      const start = Math.floor((xiSquared.length - numDigits) / 2);
      xi = parseInt(xiSquared.substr(start, numDigits), 10);
      const ri = xi / Math.pow(10, numDigits);

      results.push({
        i: i + 1,
        yi: yi,
        op: yi * yi,
        xi: xi,
        ri: ri
      });

      if (seenValues.has(xi)) {
        const previousIteration = seenValues.get(xi);
        if (!degeneracionFound) {
          this.degeneracionMessage = `El algoritmo encontró degeneración en las siguientes iteraciones: Iteración ${i + 1}: Valor ${xi} se repite con la Iteración ${previousIteration}: Valor ${xi}`;
          degeneracionFound = true;
        }
      }

      seenValues.set(xi, i + 1);
    }

    console.table(results);
    this.dataSource = results;
  }
  limpiarTabla(): void {
    this.dataSource = [];
    this.degeneracionMessage = '';
    this.x0 = 0;
    this.n = 0;
  }
}
