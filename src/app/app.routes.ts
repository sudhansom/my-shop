import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
