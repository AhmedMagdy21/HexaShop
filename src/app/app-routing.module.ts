import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { CartComponent } from './components/page/cart/cart.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { DetalisComponent } from './components/page/products/detalis/detalis.component';
import { ProductsComponent } from './components/page/products/products.component';
const routes: Routes = [
  { path: '',redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about',component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detalis/:id', component: DetalisComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
