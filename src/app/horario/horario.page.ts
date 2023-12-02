import { Component, OnInit } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  inicio = new Date().toISOString();
  fin = new Date().toISOString();

  cadenaIni: any;
  cadenaFin: any;

  constructor(private navCtrl: NavController) { 
  }

  ngOnInit() {
  }

  confirmar(){
    this.cadenaIni = format(parseISO(this.inicio),'yyyy-MM-dd HH:mm:ss');
    localStorage.setItem("ini", this.cadenaIni); 
    this.cadenaFin = format(parseISO(this.fin),'yyyy-MM-dd HH:mm:ss');
    localStorage.setItem("fin", this.cadenaFin); 
    this.cadenaIni = format(parseISO(this.inicio),'HH:mm, dd MMM yyyy');
    localStorage.setItem("desde", this.cadenaIni); 
    this.cadenaFin = format(parseISO(this.fin),'HH:mm, dd MMM yyyy');
    localStorage.setItem("hasta", this.cadenaFin); 
    localStorage.setItem("hora", "de Arriendo");  
    this.navCtrl.back(); 
  }
}
