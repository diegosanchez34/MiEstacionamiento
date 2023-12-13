import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Arriendos', url: '/arriendos', icon: 'layers' },
    { title: 'Vehículos', url: '/vehiculos', icon: 'car' },
    { title: 'Estacionamientos', url: '/estacionamientos', icon: 'stop' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-circle' },
    { title: 'Contáctanos', url: '/contactanos', icon: 'mail' }
  ];
  
  constructor(private router: Router,private alertController: AlertController) {}

  async cerrar() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que desea cerrar su sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('El usuario canceló');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login']); 
          },
        }        
      ]
    });
    await alert.present();
  }

}
