import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEmocionesPageRoutingModule } from './gestion-emociones-routing.module';

import { GestionEmocionesPage } from './gestion-emociones.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEmocionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    GestionEmocionesPage,
  ]
})
export class GestionEmocionesPageModule {}
