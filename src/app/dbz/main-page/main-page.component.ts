import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Personaje } from '../types/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../app.component.css'],
})
export class MainPageComponent {
  nuevoPersonaje: Personaje = {
    nombre: 'Roshi',
    poder: 1000,
  };
}
