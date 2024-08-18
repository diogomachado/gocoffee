import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
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
];
