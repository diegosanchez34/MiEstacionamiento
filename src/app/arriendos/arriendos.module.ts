import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArriendosPageRoutingModule } from './arriendos-routing.module';

import { ArriendosPage } from './arriendos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArriendosPageRoutingModule
  ],
  declarations: [ArriendosPage]
})
export class ArriendosPageModule {}
