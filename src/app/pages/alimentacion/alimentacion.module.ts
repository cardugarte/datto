import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentacionPageRoutingModule } from './alimentacion-routing.module';

import { AlimentacionPage } from './alimentacion.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentacionPageRoutingModule
  ],
  declarations: [
    AlimentacionPage,
    ToolbarComponent,
    FooterComponent
  ]
})
export class AlimentacionPageModule {}
