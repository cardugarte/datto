import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    HomePage,
    ToolbarComponent,
    FooterComponent
  ]
})
export class HomePageModule {}


