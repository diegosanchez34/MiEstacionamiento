import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  cadena: string | null = localStorage.getItem("est");
  estacionamiento:any;

  constructor(private router: Router) { 
    if (this.cadena !== null) {
      // Convertir la cadena JSON a un objeto
      this.estacionamiento = JSON.parse(this.cadena);
    } else {
      this.estacionamiento = " ";
    }
  }

    ngOnInit() {
  }

  arrendar(){
    this.router.navigate(['/mapa']);
  }

}
