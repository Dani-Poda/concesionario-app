import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProductsComponent } from './products-component/products-component';
import { ProductsDetailComponent } from './products-detail-component/products-detail-component';
import { CartComponent } from './cart-component/cart-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'products/:id',
    component: ProductsDetailComponent
  },
  
  {
    path: 'cart',
    component: CartComponent
  }
];
