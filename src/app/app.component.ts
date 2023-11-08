import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mapa', url: '#', icon: 'map' },
    { title: 'Arriendos', url: '#', icon: 'layers' },
    { title: 'Vehiculos', url: '#', icon: 'car' },
    { title: 'Estacionamientos', url: '#', icon: 'stop' },
    { title: 'Ajustes', url: '#', icon: 'settings' },
    { title: 'Ayuda', url: '#', icon: 'help-circle' },
    { title: 'Contáctanos', url: '#', icon: 'mail' }
  ];
  nombre = "Diego";
  apellido = "Sanchez";
  constructor() {}

}
