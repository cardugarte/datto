import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludSexualPageRoutingModule } from './salud-sexual-routing.module';

import { SaludSexualPage } from './salud-sexual.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludSexualPageRoutingModule
  ],
  declarations: [
    SaludSexualPage,
    ToolbarComponent,
    FooterComponent
  ]
})
export class SaludSexualPageModule {}
