import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DetalisComponent } from './products/detalis/detalis.component';
import { SelectComponent } from './products/select/select.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    CartComponent,
    DetalisComponent,
    SelectComponent,
    SingleProductComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    CartComponent,
    DetalisComponent,
    PreloaderComponent

  ]
})
export class PageModule { }
