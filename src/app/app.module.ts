import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
  InjectionToken,
} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import localeCo from '@angular/common/locales/es-CO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IWebStorageService } from '@core/entities/browser.entities';
import { NetworkAwarePreloadStrategy } from './network.preloading';
import { PageModule } from './core/components/page/page.module';
import { CommonEffects } from './core/store/effects/common.effects';
import { rootReducer } from './core/store/reducers';
import { RootFacade } from './core/store/root.facade';
import { ModalModule } from './core/components/modal/modal.module';
import { LocalStorageService } from './core/services/webstorage.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonService } from './core/services/common.service';
import { LoaderModule } from './core/components/loader/loader.module';

export const ROOT_REDUCER_TOKEN = new InjectionToken('Registered Reducers');

registerLocaleData(localeCo, 'es-CO');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PageModule,
    AppRoutingModule,
    EffectsModule.forRoot([CommonEffects]),
    StoreModule.forRoot(ROOT_REDUCER_TOKEN),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ModalModule,
    LoaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      registrationStrategy: 'registerImmediately',
    }),
  ],
  providers: [
    NetworkAwarePreloadStrategy,
    RootFacade,
    CommonService,
    { provide: LOCALE_ID, useValue: 'es-CO' },
    {
      provide: ROOT_REDUCER_TOKEN,
      useValue: rootReducer,
    },
    {
      provide: IWebStorageService,
      useClass: LocalStorageService,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
