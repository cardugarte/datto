import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcosoPageRoutingModule } from './acoso-routing.module';

import { AcosoPage } from './acoso.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcosoPageRoutingModule,
  ],
  declarations: [
    AcosoPage,
    ToolbarComponent,
  ]
})
export class AcosoPageModule {}
