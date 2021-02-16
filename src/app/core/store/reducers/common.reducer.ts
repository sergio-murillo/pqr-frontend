import { createReducer, on, Action } from '@ngrx/store';

import { CommonState } from '../state/common.state';
import * as CommonActions from '../actions/common.actions';
import {
  ListCustomer,
  ListRequest,
  Request,
} from '../../entities/common.entities';

// Estado común de la aplicación
export const initialState: CommonState = {
  getById: ({} as any) as Request,
  getAll: ({} as any) as ListRequest,
  getAllCustomers: ({} as any) as ListCustomer,
  isLoading: false,
};

const commonReducers = createReducer(
  initialState,
  on(CommonActions.responseGetById, (state, { response }) => {
    return {
      ...state,
      getById: response,
    };
  }),
  on(CommonActions.responseGetAll, (state, { response }) => {
    return {
      ...state,
      getAll: response,
    };
  }),
  on(CommonActions.responseGetAllFiltered, (state, { response }) => {
    return {
      ...state,
      getAll: response,
    };
  }),
  on(CommonActions.responseGetAllCustomers, (state, { response }) => {
    return {
      ...state,
      getAllCustomers: response,
    };
  }),
  on(CommonActions.setLoader, (state, { isLoading }) => {
    return {
      ...state,
      isLoading,
    };
  }),
);

export function reducer(state: CommonState | undefined, action: Action) {
  return commonReducers(state, action);
}
