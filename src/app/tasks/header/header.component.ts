import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faCoffee = faCoffee;

  //TODO remove all packages
  //   yarn add @fortawesome/angular-fontawesome
  // yarn add @fortawesome/fontawesome-svg-core
  // yarn add @fortawesome/free-brands-svg-icons
  // yarn add @fortawesome/free-regular-svg-icons
  // yarn add @fortawesome/free-solid-svg-icons
}
