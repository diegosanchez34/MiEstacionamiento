import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cadena_user: string | null = localStorage.getItem("usuario");
  tipo: string | null = localStorage.getItem("tipo");
  user: any;

  constructor() { 
    if (this.cadena_user !== null) 
      this.user = JSON.parse(this.cadena_user);
    else
      this.user = " ";
  }

  ngOnInit() {}

  isCliente(){
    if(this.tipo==='cliente')
      return true;
    else
      return false;
  }

  isDueno(){
    if(this.tipo==='dueno')
      return true;
    else
      return false;
  }
}
