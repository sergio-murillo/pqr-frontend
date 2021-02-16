import { createAction, props } from '@ngrx/store';
import { Claim, CreateClaim, ListClaim } from '../entities/claim.entities';

export const requestGetById = createAction(
  '[Claims] Request By Id',
  props<{ id: string }>(),
);

export const responseGetById = createAction(
  '[Claims] Response By Id',
  props<{ response: Claim }>(),
);

export const requestGetAll = createAction('[Claims] Request All');

export const responseGetAll = createAction(
  '[Claims] Response All',
  props<{ response: ListClaim }>(),
);

export const requestCreate = createAction(
  '[Claims] Request Create',
  props<{ body: CreateClaim }>(),
);

export const responseCreate = createAction(
  '[Claims] Response Create',
  props<{ response: Claim }>(),
);

export const requestGetAllFiltered = createAction(
  '[Claims] Request All Filters',
  props<{ filter: string }>(),
);

export const responseGetAllFiltered = createAction(
  '[Claims] Response All Filters',
  props<{ response: ListClaim }>(),
);

export const setLoadingClaims = createAction(
  '[Claims] Set Loading Claims',
  props<{ isLoading: boolean }>(),
);
