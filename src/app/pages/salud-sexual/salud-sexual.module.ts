import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludSexualPageRoutingModule } from './salud-sexual-routing.module';

import { SaludSexualPage } from './salud-sexual.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludSexualPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SaludSexualPage,

  ]
})
export class SaludSexualPageModule {}
