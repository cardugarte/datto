import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexoAfectivasPage } from './sexo-afectivas.page';

const routes: Routes = [
  {
    path: '',
    component: SexoAfectivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexoAfectivasPageRoutingModule {}
