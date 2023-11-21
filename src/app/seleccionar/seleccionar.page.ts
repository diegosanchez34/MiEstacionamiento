import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage implements OnInit {

  selectedCard: number | null = null;
  vehiculos:any = [];
  apiURL = 'http://localhost/estacionamiento_getVehiculos.php';

  constructor(private http: HttpClient,private router: Router) {
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.vehiculos = respuesta;
    });
   }

  ngOnInit() {
  }

  seleccionar(index: number, vehiculo: any) {
    index = index+1;
    this.selectedCard = index-1; // Seleccionar la nueva carta
    localStorage.setItem("vehi", JSON.stringify(vehiculo));  
    localStorage.setItem("i", index.toString());  
  }
}
