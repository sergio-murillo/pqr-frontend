import { createAction, props } from '@ngrx/store';
import {
  ListCustomer,
  ListRequest,
  Request,
} from '../../entities/common.entities';

// Acciones para comun
export const requestGetById = createAction(
  '[Common] Request By Id',
  props<{ id: string }>(),
);

export const responseGetById = createAction(
  '[Common] Response By Id',
  props<{ response: Request }>(),
);

export const requestGetAll = createAction('[Common] Request All');

export const responseGetAll = createAction(
  '[Common] Response All',
  props<{ response: ListRequest }>(),
);

export const requestGetAllFiltered = createAction(
  '[Common] Request All Filters',
  props<{ filter: string }>(),
);

export const responseGetAllFiltered = createAction(
  '[Common] Response All Filters',
  props<{ response: ListRequest }>(),
);

export const requestGetAllCustomers = createAction(
  '[Common] Request All Customers',
);

export const responseGetAllCustomers = createAction(
  '[Common] Response All Customers',
  props<{ response: ListCustomer }>(),
);

export const setLoader = createAction(
  '[Common] Set Loader',
  props<{ isLoading: boolean }>(),
);
