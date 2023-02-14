import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Personaje } from '../types/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['../../app.component.css'],
})
export class PersonajesComponent {
  // @Input() personajes:Personaje[] = [];

  constructor(private dbzService: DbzService) {}

  get personajes() {
    return this.dbzService.personajesGetter;
  }
}
