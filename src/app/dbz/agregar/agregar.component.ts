import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../types/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['../../app.component.css'],
})
export class AgregarComponent {
  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
