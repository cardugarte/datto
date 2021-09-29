import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludSexualPage } from './salud-sexual.page';

const routes: Routes = [
  {
    path: '',
    component: SaludSexualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludSexualPageRoutingModule {}
