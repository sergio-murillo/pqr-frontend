import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeContainer } from './home.container';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeContainer,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
