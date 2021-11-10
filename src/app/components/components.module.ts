import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes comunes para ser usados en todas las páginas:
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactComponent } from './contact/contact.component';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [
    FooterComponent,
    ToolbarComponent,
    ContactComponent,
    SlidesComponent
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    ContactComponent,
    SlidesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
