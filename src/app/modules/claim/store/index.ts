import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ClaimState } from './claim.state';
import { claimFeatureName } from './claim.reducer';

export const ClaimRootSelector = createFeatureSelector<ClaimState>(
  claimFeatureName,
);

export const getAllSelector = createSelector(
  ClaimRootSelector,
  (data) => data?.getAll,
);

export const getByIdSelector = createSelector(
  ClaimRootSelector,
  (data) => data?.getById,
);

export const createClaimSelector = createSelector(
  ClaimRootSelector,
  (data) => data?.create,
);

export const isLoadingClaimsSelector = createSelector(
  ClaimRootSelector,
  (data) => data.isLoadingClaims,
);
