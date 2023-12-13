import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arriendos',
  templateUrl: './arriendos.page.html',
  styleUrls: ['./arriendos.page.scss'],
})
export class ArriendosPage implements OnInit {

  arriendos:any = [];
  arri:any = [];
  user: any;
  apiURL = 'http://localhost/estacionamiento_getArriendos.php';
  cadena_user: string | null = localStorage.getItem("usuario");
  NotFound: boolean = true;

  constructor(private http: HttpClient) {
    if (this.cadena_user !== null) 
      this.user = JSON.parse(this.cadena_user);
    else
      this.user = " ";
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.arriendos = respuesta;
    });
   }

  ngOnInit() {
  }

}
