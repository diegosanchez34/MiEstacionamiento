import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  cadena_est: string | null = localStorage.getItem("est");
  cadena_vehi: string | null = localStorage.getItem("vehi");
  cadena_ini: string | null = localStorage.getItem("ini");
  cadena_fin: string | null = localStorage.getItem("fin");
  index:any = localStorage.getItem("i");
  horario:any = localStorage.getItem("hora");
  
  estacionamiento:any;
  vehiculo:any;


  constructor(private router: Router) { 

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
    this.horario = localStorage.getItem("hora");

    if (cadena_vehi !== null) {
      // Convertir la cadena JSON a un objeto
      this.vehiculo = JSON.parse(cadena_vehi!);
    } else {
      this.vehiculo = " ";
    }

    this.cadena_ini = localStorage.getItem("ini");
    this.cadena_fin = localStorage.getItem("fin");
  }

  SelecVehiculo( ){
    this.router.navigate(['/seleccionar']);
  }

  SelecHora( ){
    this.router.navigate(['/horario']);
  }
}