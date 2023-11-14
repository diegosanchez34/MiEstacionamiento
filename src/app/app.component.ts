import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Arriendos', url: '/arriendos', icon: 'layers' },
    { title: 'Vehículos', url: '/vehiculos', icon: 'car' },
    { title: 'Estacionamientos', url: '/estacionamientos', icon: 'stop' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-circle' },
    { title: 'Contáctanos', url: 'contactanos', icon: 'mail' }
  ];
  nombre = "Diego";
  apellido = "Sanchez";
  constructor() {}

}
