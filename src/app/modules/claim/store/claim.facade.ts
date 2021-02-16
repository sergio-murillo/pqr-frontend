import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ClaimActions from './claim.actions';
import { Claim, CreateClaim, ListClaim } from '../entities/claim.entities';
import {
  createClaimSelector,
  getAllSelector,
  getByIdSelector,
  isLoadingClaimsSelector,
} from '.';

@Injectable()
export class ClaimFacade {
  public getById$: Observable<Claim> = this.store.select(getByIdSelector);

  public getAll$: Observable<ListClaim> = this.store.select(getAllSelector);

  public create$: Observable<Claim> = this.store.select(createClaimSelector);

  public isLoadingClaims$: Observable<boolean> = this.store.select(
    isLoadingClaimsSelector,
  );

  constructor(private store: Store<any>) {}

  public requestGetById(id: string): void {
    this.store.dispatch(ClaimActions.requestGetById({ id }));
  }

  public requestGetAll(): void {
    this.store.dispatch(ClaimActions.requestGetAll());
  }

  public requestGetAllFiltered(filter: string): void {
    this.store.dispatch(ClaimActions.requestGetAllFiltered({ filter }));
  }

  public requestCreate(body: CreateClaim): void {
    this.store.dispatch(ClaimActions.requestCreate({ body }));
  }

  public setLoadingClaims(isLoading: boolean): void {
    this.store.dispatch(ClaimActions.setLoadingClaims({ isLoading }));
  }
}
