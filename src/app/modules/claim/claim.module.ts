import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimContainer } from './claim.container';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { claimFeatureName, reducer } from './store/claim.reducer';
import { ClaimState } from './store/claim.state';
import { ClaimEffects } from './store/claim.effects';
import { ClaimFacade } from './store/claim.facade';
import { ClaimService } from './services/claim.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateClaimComponent } from './components/create-claim/create-claim.component';
import { SearchClaimsComponent } from './components/search-claims/search-claims.component';
import { FormComponent } from './components/form/form.component';
import { AutocompleteModule } from '@core/components/autocomplete/autocomplete.module';
import { RequestFacade } from '../request/store/request.facade';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@src/app/core/pipes/pipes.module';
import { ViewClaimComponent } from './components/view-claim/view-claim.component';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<ClaimState>
>('Claim Reducer');

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ClaimRoutingModule,
    StoreModule.forFeature(claimFeatureName, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([ClaimEffects]),
    AutocompleteModule,
    NgxDatatableModule,
    MatIconModule,
    PipesModule,
  ],
  declarations: [
    ClaimContainer,
    CreateClaimComponent,
    SearchClaimsComponent,
    FormComponent,
    ViewClaimComponent,
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useValue: reducer,
    },
    ClaimFacade,
    RequestFacade,
    ClaimService,
  ],
  exports: [ClaimContainer],
})
export class ClaimModule {}
