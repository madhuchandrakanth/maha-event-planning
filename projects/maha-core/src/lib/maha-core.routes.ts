import { Routes } from '@angular/router';

export const mahaCoreRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  }
];
