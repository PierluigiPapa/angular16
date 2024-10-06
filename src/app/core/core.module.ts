import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent
  ]
})
export class CoreModule { }
