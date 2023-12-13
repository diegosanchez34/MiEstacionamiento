import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  vehiculos:any = [];
  vehi:any = [];
  user: any;
  apiURL = 'http://localhost/estacionamiento_getVehiculos.php';
  cadena_user: string | null = localStorage.getItem("usuario");
  NotFound: boolean = true;

  constructor(private http: HttpClient) { 
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

  ngOnInit() {}

  ionViewWillEnter() {}
  
}
