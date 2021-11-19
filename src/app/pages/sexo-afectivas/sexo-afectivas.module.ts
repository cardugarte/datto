import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexoAfectivasPageRoutingModule } from './sexo-afectivas-routing.module';

import { SexoAfectivasPage } from './sexo-afectivas.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexoAfectivasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SexoAfectivasPage,
  ]
})
export class SexoAfectivasPageModule {}
