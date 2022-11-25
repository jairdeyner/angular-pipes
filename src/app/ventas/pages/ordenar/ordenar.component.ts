import { Component } from '@angular/core';

import { Color, Heroe } from '../../intefaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayuscula: boolean = true;
  ordenarPor: string = '';
  heroes: Array<Heroe> = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  toggleMayuscula(): void {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor: string): void {
    this.ordenarPor = valor;
  }
}
