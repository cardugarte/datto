import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoProblematicoPageRoutingModule } from './consumo-problematico-routing.module';

import { ConsumoProblematicoPage } from './consumo-problematico.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoProblematicoPageRoutingModule
  ],
  declarations: [
    ConsumoProblematicoPage,
    ToolbarComponent,
  ]
})
export class ConsumoProblematicoPageModule {}
