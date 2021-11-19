import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoProblematicoPageRoutingModule } from './consumo-problematico-routing.module';

import { ConsumoProblematicoPage } from './consumo-problematico.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoProblematicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ConsumoProblematicoPage,
  ]
})
export class ConsumoProblematicoPageModule {}
