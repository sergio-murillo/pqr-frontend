import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkAwarePreloadStrategy } from './network.preloading';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'request',
    loadChildren: () =>
      import('./modules/request/request.module').then((m) => m.RequestModule),
  },
  {
    path: 'claim',
    loadChildren: () =>
      import('./modules/claim/claim.module').then((m) => m.ClaimModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NetworkAwarePreloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
