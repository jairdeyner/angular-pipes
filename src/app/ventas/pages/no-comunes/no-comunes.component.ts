import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Kiara';
  genero: string = 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Jair', 'Piero', 'Shanthal'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Jair';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Jair',
    edad: 26,
    direccion: 'Lima, Perú',
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',

      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(5000);

  valorPomesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
