import { Injectable } from '@angular/core';
import { Personaje } from '../types/dbz.interface';

@Injectable()
export class DbzService {
  private personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 14999,
    },
  ];

  get personajesGetter() {
    return [...this.personajes];
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
