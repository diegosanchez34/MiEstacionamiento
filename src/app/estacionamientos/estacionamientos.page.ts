import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estacionamientos',
  templateUrl: './estacionamientos.page.html',
  styleUrls: ['./estacionamientos.page.scss'],
})
export class EstacionamientosPage implements OnInit {

  estacionamientos:any = [];
  esta:any = [];
  user: any;
  apiURL = 'http://localhost/estacionamiento_getEstacionamientos.php';
  cadena_user: string | null = localStorage.getItem("usuario");
  NotFound: boolean = true;

  constructor(private http: HttpClient) {
    if (this.cadena_user !== null) 
      this.user = JSON.parse(this.cadena_user);
    else
      this.user = " ";

    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.estacionamientos = respuesta;
      for (let estacionamiento of this.estacionamientos){
        if(estacionamiento.run_due === this.user.run_due){
          this.esta.push(estacionamiento)
          this.NotFound = false;
        }         
      }
    }); 
   }

  ngOnInit() {
  }


}
