import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'app-estacionamientos',
  templateUrl: './estacionamientos.page.html',
  styleUrls: ['./estacionamientos.page.scss'],
})
export class EstacionamientosPage implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getEsta(){
    console.log("working...");
  }


}
