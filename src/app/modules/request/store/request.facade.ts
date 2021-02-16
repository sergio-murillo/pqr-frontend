import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as RequestActions from './request.actions';
import { createRequestSelector, isLoadingRequestsSelector } from '.';
import { CreateRequest } from '../entities/request.entities';
import { Request } from '@core/entities/common.entities';

@Injectable()
export class RequestFacade {
  public create$: Observable<Request> = this.store.select(
    createRequestSelector,
  );

  public isLoadingRequests$: Observable<boolean> = this.store.select(
    isLoadingRequestsSelector,
  );

  constructor(private store: Store<any>) {}

  public requestCreate(body: CreateRequest): void {
    this.store.dispatch(RequestActions.requestCreate({ body }));
  }

  public setLoadingClaims(isLoading: boolean): void {
    this.store.dispatch(RequestActions.setLoadingRequests({ isLoading }));
  }
}
