import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgPaymentCardModule } from 'ng-payment-card';

import { PageModule } from '@core/components/page/page.module';
import { RequestState } from './store/request.state';
import { reducer, requestFeatureName } from './store/request.reducer';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModalModule } from '@src/app/core/components/modal/modal.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RequestRoutingModule } from './request-routing.module';
import { RequestEffects } from './store/request.effects';
import { RequestContainer } from './request.container';
import { RequestFacade } from './store/request.facade';
import { RequestService } from './services/request.service';
import { PipesModule } from '@src/app/core/pipes/pipes.module';
import { FormComponent } from './components/form/form.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { AutocompleteModule } from '@src/app/core/components/autocomplete/autocomplete.module';
import { SearchRequestsComponent } from './components/search-requests/search-requests.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<RequestState>
>('Request Reducer');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RequestRoutingModule,
    PageModule,
    TranslateModule,
    StoreModule.forFeature(requestFeatureName, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([RequestEffects]),
    NgxDatatableModule,
    MatIconModule,
    MatSlideToggleModule,
    NgPaymentCardModule,
    ModalModule,
    MatSnackBarModule,
    PipesModule,
    AutocompleteModule,
  ],
  declarations: [
    RequestContainer,
    FormComponent,
    CreateRequestComponent,
    SearchRequestsComponent,
    ViewRequestComponent,
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useValue: reducer,
    },
    RequestFacade,
    RequestService,
  ],
})
export class RequestModule {}
