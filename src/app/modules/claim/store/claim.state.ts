import { Claim, ListClaim } from '../entities/claim.entities';

export type ClaimState = Readonly<{
  getById: Claim;
  getAll: ListClaim;
  create: Claim;
  isLoadingClaims: boolean;
}>;
