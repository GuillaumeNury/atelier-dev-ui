import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'routing',
    loadChildren: () =>
      import('./exercices/3-angular/6-routing').then((m) => m.routes),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users.page').then((m) => m.UsersPage),
  },
];
