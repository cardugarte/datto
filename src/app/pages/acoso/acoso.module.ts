import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcosoPageRoutingModule } from './acoso-routing.module';

import { AcosoPage } from './acoso.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcosoPageRoutingModule,
    ComponentsModule

  ],
  declarations: [
    AcosoPage,
  ]
})
export class AcosoPageModule {}
