import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arriendos',
  templateUrl: './arriendos.page.html',
  styleUrls: ['./arriendos.page.scss'],
})
export class ArriendosPage implements OnInit {

  arriendos:any = [];

  apiURL = 'http://localhost/estacionamiento_getArriendos.php';

  constructor(private http: HttpClient) {
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.arriendos = respuesta;
    });
   }

  ngOnInit() {
  }

}
