import { createReducer, on, Action } from '@ngrx/store';
import { Request } from '@core/entities/common.entities';

import * as RequestActions from './request.actions';
import { RequestState } from './request.state';

export const requestFeatureName = 'request';

export const initialState: RequestState = {
  create: ({} as any) as Request,
  isLoadingRequests: false,
};

const requestReducers = createReducer(
  initialState,
  on(RequestActions.responseCreate, (state, { response }) => {
    return {
      ...state,
      create: response,
    };
  }),
  on(RequestActions.setLoadingRequests, (state, { isLoading }) => {
    return {
      ...state,
      isLoadingRequests: isLoading,
    };
  }),
);

export function reducer(state: RequestState | undefined, action: Action) {
  return requestReducers(state, action);
}
