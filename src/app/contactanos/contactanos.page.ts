import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async enviar() {
    const alert = await this.alertController.create({
      header: 'Mensaje Enviado',
      message: 'Te responderemos lo antes posible.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
