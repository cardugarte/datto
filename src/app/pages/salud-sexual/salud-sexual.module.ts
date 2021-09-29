import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludSexualPageRoutingModule } from './salud-sexual-routing.module';

import { SaludSexualPage } from './salud-sexual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludSexualPageRoutingModule
  ],
  declarations: [SaludSexualPage]
})
export class SaludSexualPageModule {}
