import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexoAfectivasPageRoutingModule } from './sexo-afectivas-routing.module';

import { SexoAfectivasPage } from './sexo-afectivas.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexoAfectivasPageRoutingModule
  ],
  declarations: [
    SexoAfectivasPage,
    ToolbarComponent,
    FooterComponent
  ]
})
export class SexoAfectivasPageModule {}
