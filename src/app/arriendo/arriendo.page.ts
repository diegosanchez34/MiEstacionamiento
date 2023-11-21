import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  cadena_est: string | null = localStorage.getItem("est");
  cadena_vehi: string | null = localStorage.getItem("vehi");
  index:any = localStorage.getItem("i");
  horario:any = localStorage.getItem("hora");
  
  estacionamiento:any;
  vehiculo:any;
  inicio:any;
  fin:any;

  constructor(private router: Router,private location: Location) { 

    if (this.cadena_est !== null) {
      // Convertir la cadena JSON a un objeto
      this.estacionamiento = JSON.parse(this.cadena_est);
    } else {
      this.estacionamiento = " ";
    }

    if (this.cadena_vehi !== null) {
      // Convertir la cadena JSON a un objeto
      this.vehiculo = JSON.parse(this.cadena_vehi);
    } else {
      this.vehiculo =" ";
    }
  }

    ngOnInit() {
  }

  ionViewWillEnter() {
    const cadena_vehi: string | null = localStorage.getItem("vehi");
    this.index = localStorage.getItem("i");

    if (cadena_vehi !== null) {
      // Convertir la cadena JSON a un objeto
      this.vehiculo = JSON.parse(cadena_vehi!);
    } else {
      this.vehiculo = " ";
    }
  }

  SelecVehiculo( ){
    this.router.navigate(['/seleccionar']);
  }

  SelecHora( ){
    this.router.navigate(['/horario']);
  }
}