import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  cadena: string | null = localStorage.getItem("est");
  estacionamiento:any;

  constructor() { 
    if (this.cadena !== null) {
      // Convertir la cadena JSON a un objeto
      this.estacionamiento = JSON.parse(this.cadena);
    } else {
      this.estacionamiento = " ";
    }
  }

    ngOnInit() {
  }

}
