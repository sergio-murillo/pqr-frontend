import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {
  ListCustomer,
  ListRequest,
  Request,
} from '../entities/common.entities';

import * as RootActions from './actions/common.actions';

/**
 * Clase encargada de gestionar los estados para commons
 */
@Injectable()
export class RootFacade {
  public getById$: Observable<Request> = this.store.select(
    (store) => store.common?.getById,
  );

  public getAll$: Observable<ListRequest> = this.store.select(
    (store) => store.common?.getAll,
  );

  public getAllCustomers$: Observable<ListCustomer> = this.store.select(
    (store) => store.common?.getAllCustomers,
  );

  public isLoading$: Observable<boolean> = this.store.select(
    (store) => store.common?.isLoading,
  );

  constructor(public store: Store<any>) {}

  public requestGetById(id: string): void {
    this.store.dispatch(RootActions.requestGetById({ id }));
  }

  public requestGetAll(): void {
    this.store.dispatch(RootActions.requestGetAll());
  }

  public requestGetAllFiltered(filter: string): void {
    this.store.dispatch(RootActions.requestGetAllFiltered({ filter }));
  }

  public requestGetAllCustomers(): void {
    this.store.dispatch(RootActions.requestGetAllCustomers());
  }

  public setLoader(isLoading: boolean): void {
    this.store.dispatch(RootActions.setLoader({ isLoading }));
  }
}
