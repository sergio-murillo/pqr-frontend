import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';
import * as CommonActions from '../actions/common.actions';
import * as RequestActions from '@app/modules/request/store/request.actions';

/**
 * Clase encarga de effects en common
 */
@Injectable()
export class CommonEffects {
  constructor(private actions$: Actions, private service: CommonService) {}

  public getById$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.requestGetById),
      switchMap(({ id }) =>
        this.service.findById(id).pipe(
          mergeMap((response) => [
            CommonActions.responseGetById({
              response,
            }),
          ]),
        ),
      ),
    ),
  );

  public getAll$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.requestGetAll),
      switchMap(() =>
        this.service.findAll().pipe(
          mergeMap((response) => [
            CommonActions.responseGetAll({
              response,
            }),
            RequestActions.setLoadingRequests({ isLoading: false }),
          ]),
        ),
      ),
    ),
  );

  public getAllFiltered$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.requestGetAllFiltered),
      switchMap(({ filter }) =>
        this.service.filter(filter).pipe(
          mergeMap((response) => [
            CommonActions.responseGetAllFiltered({
              response,
            }),
            RequestActions.setLoadingRequests({ isLoading: false }),
          ]),
        ),
      ),
    ),
  );

  public getAllCustomers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.requestGetAllCustomers),
      switchMap(() =>
        this.service.findAllCustomers().pipe(
          mergeMap((response) => [
            CommonActions.responseGetAllCustomers({
              response,
            }),
          ]),
        ),
      ),
    ),
  );
}
