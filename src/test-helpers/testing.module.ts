import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';

import { rootReducer } from '@core/store/reducers';
import { RootFacade } from '@core/store/root.facade';
import { IWebStorageService } from '@core/entities/browser.entities';
import { WebStorageServiceMock } from './mocks/webstorage.service.mock';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    RouterTestingModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot(rootReducer),
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  exports: [TranslateModule],
  providers: [
    RootFacade,
    {
      provide: IWebStorageService,
      useClass: WebStorageServiceMock
    }
  ],
})
export class TestingModule {}
