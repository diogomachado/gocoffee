import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  {
    path: 'como-funciona',
    loadComponent() {
      return import('./pages/about/about.component').then(
        (m) => m.AboutComponent
      );
    },
  },
  {
    path: 'login',
    loadComponent() {
      return import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  { path: '**', component: PathNotFoundComponent },
];
