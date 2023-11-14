import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArriendosPage } from './arriendos.page';

const routes: Routes = [
  {
    path: '',
    component: ArriendosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArriendosPageRoutingModule {}
