import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerosPageRoutingModule } from './generos-routing.module';

import { GenerosPage } from './generos.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    GenerosPage,
  ]
})
export class GenerosPageModule {}
