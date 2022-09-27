import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './home/kids/kids.component';
import { MenComponent } from './home/men/men.component';
import { WomenComponent } from './home/women/women.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    KidsComponent,
    MenComponent,
    WomenComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule

  ],
  exports:[
    HomeComponent,
    HomeComponent,
    KidsComponent,
    MenComponent,
    WomenComponent

  ]
})
export class HomeModule { }
