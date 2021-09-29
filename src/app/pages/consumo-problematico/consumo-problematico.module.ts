import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoProblematicoPageRoutingModule } from './consumo-problematico-routing.module';

import { ConsumoProblematicoPage } from './consumo-problematico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoProblematicoPageRoutingModule
  ],
  declarations: [ConsumoProblematicoPage]
})
export class ConsumoProblematicoPageModule {}
