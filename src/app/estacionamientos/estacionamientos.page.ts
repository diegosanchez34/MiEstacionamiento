import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estacionamientos',
  templateUrl: './estacionamientos.page.html',
  styleUrls: ['./estacionamientos.page.scss'],
})
export class EstacionamientosPage implements OnInit {

  estacionamientos:any = [];
  apiURL = 'http://localhost/estacionamiento_getEstacionamientos.php';

  constructor(private http: HttpClient) {
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.estacionamientos = respuesta;
    });
   }

  ngOnInit() {
  }


}
