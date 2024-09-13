import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  x0: number | null = null;
  x1: number | null = null;
  n: number | null = null;
  displayedColumns: string[] = ['i', 'yi', 'op', 'xi', 'ri'];
  dataSource: Array<{ i: number, yi: string, op: string, xi: string, ri: number }> = [];
  degeneracionMessage: string | null = null;

  generarNumeros(): void {
    if (this.x0 === null || this.x1 === null|| this.n === null) {
      this.degeneracionMessage = 'Por favor, introduzca valores válidos para X0 y X1.';
      return;
    }

    const numDigits = this.x0.toString().length;
    let xiPrev = this.x0.toString();
    let xi = (this.x1).toString();
    let results = [];
    let seenValues = new Map<string, number>(); // Para rastrear valores y sus iteraciones
    let degeneracionFound = false; // Para verificar si se encontró degeneración

    for (let i = 1; i <= this.n; i++) {
      let xiaux = xi;
      let yi = `(${xiPrev})(${xi})`; // Mostrar la operación en la columna yi
      let xiProduct = (parseInt(xiPrev) * parseInt(xi)).toString();
      if(i===1){
        yi='('+this.x0+')('+this.x1+')';
      }
      // Asegurar que xiProduct tiene la longitud correcta con ceros iniciales si es necesario
      if (xiProduct.length < 2 * numDigits) {
        xiProduct = xiProduct.padStart(2 * numDigits, '0');
      }

      const start = Math.floor((xiProduct.length - numDigits) / 2)
       // Actualiza xiPrev para la próxima iteración
      xi = xiProduct.substr(start, numDigits); // Selecciona el valor central sin convertir a entero
      const ri = parseFloat('0.' + xi);
      xiPrev = xiaux;
      results.push({
        i: i,
        yi: yi,
        op: xiProduct,
        xi: xi,
        ri: ri
      });

      if (seenValues.has(xi)) {
        const previousIteration = seenValues.get(xi);
        if (!degeneracionFound) {
          this.degeneracionMessage = `El algoritmo encontró degeneración en las siguientes iteraciones: Iteración ${i}: Valor ${xi} se repite con la Iteración ${previousIteration}: Valor ${xi}`;
          degeneracionFound = true;
        }
      }

      seenValues.set(xi, i);

    }

    console.table(results);
    this.dataSource = results;
  }
  limpiarTabla(): void {
    this.dataSource = [];
    this.degeneracionMessage = '';
    this.x0 = null;
    this.x1 = null;
    this.n = 0;
  }
}
