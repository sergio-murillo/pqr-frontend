import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimContainer } from './claim.container';
import { CreateClaimComponent } from './components/create-claim/create-claim.component';
import { SearchClaimsComponent } from './components/search-claims/search-claims.component';
import { ViewClaimComponent } from './components/view-claim/view-claim.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimContainer,
    children: [
      {
        path: '',
        component: SearchClaimsComponent,
      },
      {
        path: 'save',
        component: CreateClaimComponent,
      },
      {
        path: ':id',
        component: ViewClaimComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimRoutingModule {}
