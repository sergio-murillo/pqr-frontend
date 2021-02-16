import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainer } from './home.container';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TranslateModule],
  declarations: [HomeContainer],
})
export class HomeModule {}
