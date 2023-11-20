import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  ancho = screen.width;
  estacionamientos:any = [];
  apiURL = 'http://localhost/estacionamiento_getEstacionamientos.php';

  constructor(private http: HttpClient,private router: Router) {
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.estacionamientos = respuesta;
    });
   }

  ngOnInit() {
    
  }

  async arrendar(estacionamiento:any) {
    localStorage.setItem("est", JSON.stringify(estacionamiento));
    this.router.navigate(['/arriendo']);
  }

  
}
