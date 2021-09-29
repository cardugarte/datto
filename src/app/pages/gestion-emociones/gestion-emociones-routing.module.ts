import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEmocionesPage } from './gestion-emociones.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEmocionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEmocionesPageRoutingModule {}
