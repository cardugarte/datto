import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexoAfectivasPageRoutingModule } from './sexo-afectivas-routing.module';

import { SexoAfectivasPage } from './sexo-afectivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexoAfectivasPageRoutingModule
  ],
  declarations: [SexoAfectivasPage]
})
export class SexoAfectivasPageModule {}
