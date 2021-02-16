import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { SearchRequestsComponent } from './components/search-requests/search-requests.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { RequestContainer } from './request.container';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RequestContainer,
        children: [
          {
            path: '',
            component: SearchRequestsComponent,
          },
          {
            path: 'save',
            component: CreateRequestComponent,
          },
          {
            path: ':id',
            component: ViewRequestComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RequestRoutingModule {}
