import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  title: string = 'Contador app';
  numero: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
