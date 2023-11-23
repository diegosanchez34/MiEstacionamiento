import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  inicio:Date = new Date;
  fin:Date = new Date;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  confirmar(){
    console.log(this.inicio);
    this.navCtrl.back();
  }

}
