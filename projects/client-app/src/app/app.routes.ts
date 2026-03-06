import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('maha-shared').then(m => m.Layout),
    children: [
      {
        path: '',
        loadChildren: () => import('maha-core').then(m => m.mahaCoreRoutes)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
