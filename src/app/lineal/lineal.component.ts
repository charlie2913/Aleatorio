import { Component } from '@angular/core';
@Component({
  selector: 'app-lineal',
  templateUrl: './lineal.component.html',
  styleUrls: ['./lineal.component.css']
})
export class LinealComponent {
  x0: number | null = null;
  k: number | null = null;
  c: number | null = null;
  p: number | null = null;
  g: number | null = null;
  m: number | null = null;
  a: number | null = null;
  d: number | null = null;

  resultados: Array<{ i: number, a: number, xi_1: number, c: number, p: number, g: number, m: number, xi: number, ri: number }> = [];

  generarNumeros(): void {
    if (this.x0 === null || this.k === null || this.c === null || this.p === null) {
      return;
    }

    this.g = Math.ceil(Math.log2(this.p)); // Calculando g
    this.m = Math.pow(2, this.g); // Calculando m
    this.a = 1 + 4 * this.k; // Calculando a

    let xi = this.x0;

    this.resultados = [];

    for (let i = 1; i <= this.p!; i++) {
      const xi_1 = xi;
      xi = (this.a * xi_1 + this.c) % this.m;
      const ri = parseFloat((xi / (this.m - 1)).toFixed(this.d || 0));
      this.resultados.push({ i, a: this.a, xi_1, c: this.c, p: this.p!, g: this.g, m: this.m, xi, ri });
    }

    console.table(this.resultados);
  }

  limpiarTabla(): void {
    this.resultados = [];
    this.x0 = null;
    this.k = null;
    this.c = null;
    this.p = null;
    this.g = null;
    this.m = null;
    this.a = null;
    this.d = null;

  }
}

