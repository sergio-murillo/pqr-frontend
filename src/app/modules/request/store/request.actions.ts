import { createAction, props } from '@ngrx/store';

import { CreateRequest } from '../entities/request.entities';
import { Request } from '@core/entities/common.entities';

export const requestCreate = createAction(
  '[Request] Request Create',
  props<{ body: CreateRequest }>(),
);

export const responseCreate = createAction(
  '[Request] Response Create',
  props<{ response: Request }>(),
);

export const setLoadingRequests = createAction(
  '[Request] Set Loading Requests',
  props<{ isLoading: boolean }>(),
);
