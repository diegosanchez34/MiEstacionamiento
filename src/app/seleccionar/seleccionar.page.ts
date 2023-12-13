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
  vehi:any = [];
  user: any;
  apiURL = 'http://localhost/estacionamiento_getVehiculos.php';
  cadena_user: string | null = localStorage.getItem("usuario");
  NotFound: boolean = true;

  constructor(private http: HttpClient,private router: Router) {
    if (this.cadena_user !== null) 
      this.user = JSON.parse(this.cadena_user);
    else
      this.user = " ";

    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.vehiculos = respuesta;
      for (let vehiculo of this.vehiculos){
        if(vehiculo.run_cli === this.user.run_cli){
          this.vehi.push(vehiculo)
          this.NotFound = false;
        }         
      }
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
