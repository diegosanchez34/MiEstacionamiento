import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  cadena_est: string | null = localStorage.getItem("est");
  cadena_vehi: string | null = localStorage.getItem("vehi");
  cadena_ini: string | null = localStorage.getItem("ini");
  cadena_fin: string | null = localStorage.getItem("fin");
  desde: string | null = localStorage.getItem("desde");
  hasta: string | null = localStorage.getItem("hasta");
  horario:any = localStorage.getItem("hora");
  index:any = localStorage.getItem("i");
  
  vehiculo:any;
  estacionamiento:any;
  ultimo:any;

  apiURL = 'http://localhost/estacionamiento_getUltimoArriendo.php';

  arriendo : {
    id_arr: string | null,
    hora_inic: string | null,
    hora_fin: string | null,
    patente: string | null,
    id_est: string | null,
  } = {
    id_arr: "",
    hora_inic: "",
    hora_fin: "",
    patente: "", 
    id_est: ""
  }
  alertController: any;

  constructor(private router: Router,private http: HttpClient,public Alert: AlertController) { 

    if (this.cadena_est !== null) {
      // Convertir la cadena JSON a un objeto
      this.estacionamiento = JSON.parse(this.cadena_est);
    } else {
      this.estacionamiento = " ";
    }
    this.vehiculo =" ";   
  }

  ngOnInit() {
    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.ultimo = (parseInt(respuesta.id_arr)+1).toString();
    }); 
  }

  ionViewWillEnter() {
    this.index = localStorage.getItem("i");
    this.horario = localStorage.getItem("hora");
    this.desde = localStorage.getItem("desde");
    this.hasta = localStorage.getItem("hasta");
    this.cadena_vehi = localStorage.getItem("vehi");

    if (this.cadena_vehi !== null) {
      // Convertir la cadena JSON a un objeto
      this.vehiculo = JSON.parse(this.cadena_vehi!);
    } else {
      this.vehiculo = " ";
    }

    this.http.get(this.apiURL).subscribe((respuesta:any)=>{
      this.ultimo = (parseInt(respuesta.id_arr)+1).toString();
    }); 
  }

  SelecVehiculo( ){
    this.router.navigate(['/seleccionar']);
  }

  SelecHora( ){
    this.router.navigate(['/horario']);
  }

  arrendar(){
    if(this.index == 'no seleccionado'){
      this.AlertaVehiculo();
    }
    else if(this.horario == 'no seleccionado'){
      this.AlertaHorario();
    }
    else {
      this.arriendo.id_arr = this.ultimo;
      this.arriendo.patente = this.vehiculo.patente;
      this.arriendo.id_est = this.estacionamiento.id_est;  
      this.arriendo.hora_inic = localStorage.getItem("ini");
      this.arriendo.hora_fin = localStorage.getItem("fin");
      axios.post('http://localhost/estacionamiento_insertArriendo.php',this.arriendo)
      .then((respuesta)=>{
        console.log(respuesta);
      }).catch((error)=>{
        console.log(error);
      });
      this.AlertaArriendo();
    }    
  }

  async AlertaArriendo() {
    const alert = await this.Alert.create({
      header: '¡Arriendo Exitoso!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/mapa']);
          }
        }
      ]
    });
    await alert.present();
  }

  async AlertaVehiculo() {
    const alert = await this.Alert.create({
      header: 'Vehículo no seleccionado',
      message: 'Selecione el vehículo para arrendar',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async AlertaHorario() {
    const alert = await this.Alert.create({
      header: 'Horario no seleccionado',
      message: 'Selecione un horario de arriendo',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}