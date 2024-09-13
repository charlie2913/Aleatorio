import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicativo',
  templateUrl: './multiplicativo.component.html',
  styleUrls: ['./multiplicativo.component.css']
})
export class MultiplicativoComponent {
  x0: number | null = null;
  k: number | null = null;
  aOption: string = '3+8k';  // Opción seleccionada para 'a'
  p: number | null = null;
  g: number | null = null;
  m: number | null = null;
  a: number | null = null;
  d: number | null = null;

  resultados: Array<{ i: number, xi_1: number, operacion: string, xi: number, ri: number }> = [];

  generarNumeros(): void {
    if (this.x0 === null || this.k === null || this.p === null || this.d === null) {
      return;
    }

    this.g = Math.ceil(Math.log2(this.p)); // Calculando g
    this.m = Math.pow(2, this.g); // Calculando m

    // Determinando 'a' según la opción seleccionada
    if (this.aOption === '3+8k') {
      this.a = 3 + 8 * this.k;
    } else if (this.aOption === '5+8k') {
      this.a = 5 + 8 * this.k;
    }

    let xi = this.x0;
    this.resultados = [];

    for (let i = 1; i <= this.p!; i++) {
      const xi_1 = xi;
      const operacion = `${this.a} * ${xi_1} mod ${this.m}`;
      // @ts-ignore
      xi = (this.a * xi_1) % this.m;
      const ri = parseFloat((xi / (this.m - 1)).toFixed(this.d));
      this.resultados.push({ i, xi_1, operacion, xi, ri });
    }
  }

  limpiarTabla(): void {
    this.resultados = [];
    this.x0 = null;
    this.k = null;
    this.p = null;
    this.g = null;
    this.m = null;
    this.a = null;
    this.d = null;
  }
}
