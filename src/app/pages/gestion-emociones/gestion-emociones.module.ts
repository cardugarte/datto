import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEmocionesPageRoutingModule } from './gestion-emociones-routing.module';

import { GestionEmocionesPage } from './gestion-emociones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEmocionesPageRoutingModule
  ],
  declarations: [GestionEmocionesPage]
})
export class GestionEmocionesPageModule {}
