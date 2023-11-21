import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  vehiculos:any = [];
  apiURL = 'http://localhost/estacionamiento_getVehiculos.php';

  constructor(private http: HttpClient) { 
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.vehiculos = respuesta;
    });
    
  }

  ngOnInit() {
      
  }
}
