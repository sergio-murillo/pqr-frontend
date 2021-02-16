import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RequestState } from './request.state';
import { requestFeatureName } from './request.reducer';

export const RequestRootSelector = createFeatureSelector<RequestState>(
  requestFeatureName,
);

export const createRequestSelector = createSelector(
  RequestRootSelector,
  (data) => data?.create,
);

export const isLoadingRequestsSelector = createSelector(
  RequestRootSelector,
  (data) => data.isLoadingRequests,
);
