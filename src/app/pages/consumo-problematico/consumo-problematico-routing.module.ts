import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoProblematicoPage } from './consumo-problematico.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoProblematicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoProblematicoPageRoutingModule {}
