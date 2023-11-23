import { Component, OnInit } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  inicio: Date = new Date();
  fin: Date = new Date();

  cadenaIni: any;
  cadenaFin: any;

  constructor(private navCtrl: NavController) { 

  }

  ngOnInit() {
  }

  cambiarFechaInicio(value: any){
    this.inicio = value; 
  }

  cambiarFechaFin(value: any){
    this.fin = value; 
  }

  confirmar(){
    this.cadenaIni = this.inicio;
    this.cadenaFin = this.fin;
    localStorage.setItem("ini", this.cadenaIni); 
    localStorage.setItem("fin", this.cadenaFin); 
    localStorage.setItem("hora", "de Arriendo");  
    this.navCtrl.back(); 
  }
}
