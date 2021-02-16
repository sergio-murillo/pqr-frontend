import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    StoreDevtoolsModule.instrument({
      maxAge: 150,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppDevModule {}
