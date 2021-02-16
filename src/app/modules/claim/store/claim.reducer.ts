import { createReducer, on, Action } from '@ngrx/store';
import { Claim, ListClaim } from '../entities/claim.entities';

import * as ClaimActions from './claim.actions';
import { ClaimState } from './claim.state';

export const claimFeatureName = 'claim';

export const initialState: ClaimState = {
  getById: ({} as any) as Claim,
  getAll: ({} as any) as ListClaim,
  create: ({} as any) as Claim,
  isLoadingClaims: false,
};

const claimReducers = createReducer(
  initialState,
  on(ClaimActions.responseGetById, (state, { response }) => {
    return {
      ...state,
      getById: response,
    };
  }),
  on(ClaimActions.responseGetAll, (state, { response }) => {
    return {
      ...state,
      getAll: response,
    };
  }),
  on(ClaimActions.responseCreate, (state, { response }) => {
    return {
      ...state,
      create: response,
    };
  }),
  on(ClaimActions.responseGetAllFiltered, (state, { response }) => {
    return {
      ...state,
      getAll: response,
    };
  }),
  on(ClaimActions.setLoadingClaims, (state, { isLoading }) => {
    return {
      ...state,
      isLoadingClaims: isLoading,
    };
  }),
);

export function reducer(state: ClaimState | undefined, action: Action) {
  return claimReducers(state, action);
}
