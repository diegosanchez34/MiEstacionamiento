import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  clientes:any = [];
  duenos:any = [];

  clienteURL = 'http://localhost/estacionamiento_getClientes.php';
  duenoURL= 'http://localhost/estacionamiento_getDuenos.php';

  tipo: string ="password";
  hide: boolean = false;
  NotFound: boolean = true;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  }) 

  constructor(private http: HttpClient, public Alert: AlertController,private router: Router) {
    this.http.get(this.clienteURL).subscribe((respuesta:any)=>{this.clientes = respuesta});
    this.http.get(this.duenoURL).subscribe((respuesta:any)=>{this.duenos = respuesta});
  }

  ngOnInit() {
    localStorage.setItem('usuario',' ')
  }

  ojito(){
    this.hide = !this.hide;
    if (this.hide)
      this.tipo = 'password';
    else
    this.tipo = 'text';
  }

  async ingresar(){

    this.NotFound = true;

    if(this.form.controls.email.errors?.['required'] || this.form.controls.password.errors?.['required']){
      this.AlertaVacio();
    }
    else if(this.form.controls.email.errors?.['email'] ){
      this.AlertaEmail();
    }
    else {
      
      for (let cliente of this.clientes) {
        if (cliente.correo === this.form.controls.email.value && cliente.clave === this.form.controls.password.value){
          localStorage.setItem('usuario',JSON.stringify(cliente)); 
          localStorage.setItem('tipo','cliente'); 
          this.NotFound = false;
          this.router.navigate(['/mapa']);
          break;
        }            
      }
      if(this.NotFound){
        for (let dueno of this.duenos) {
          if (dueno.correo === this.form.controls.email.value && dueno.clave === this.form.controls.password.value){
            localStorage.setItem('usuario',JSON.stringify(dueno)); 
            localStorage.setItem('tipo','dueno'); 
            this.NotFound = false;
            this.router.navigate(['/mapa']);
            break;
          }            
        }
      }
      if(this.NotFound)
        this.AlertaError();
    }  
  }

  async AlertaVacio() {
    const alert = await this.Alert.create({
      header: 'Campos vacios',
      message: 'Ingrese todos los datos de usuario',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async AlertaEmail() {
    const alert = await this.Alert.create({
      header: 'Correo invalido',
      message: 'Ingrese una direccion de correo valida',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async AlertaError() {
    const alert = await this.Alert.create({
      header: 'Credenciales Incorrectas',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  ionViewWillEnter() {
  }

}
