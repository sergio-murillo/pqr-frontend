import { routerReducer } from '@ngrx/router-store';

import { reducer as commonReducer } from './common.reducer';

const reducers = {
  router: routerReducer,
  common: commonReducer,
};

export const rootReducer = reducers;
