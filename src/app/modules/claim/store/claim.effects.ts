import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, mergeMap, catchError, tap } from 'rxjs/operators';

import { ClaimService } from '../services/claim.service';
import * as ClaimActions from './claim.actions';
import * as RootActions from '@core/store/actions/common.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ClaimEffects {
  constructor(
    private actions$: Actions,
    private service: ClaimService,
    private snackBar: MatSnackBar,
  ) {}

  public getById$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ClaimActions.requestGetById),
      switchMap(({ id }) =>
        this.service.findById(id).pipe(
          mergeMap((response) => [
            ClaimActions.responseGetById({
              response,
            }),
          ]),
        ),
      ),
    ),
  );

  public getAll$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ClaimActions.requestGetAll),
      switchMap(() =>
        this.service.findAll().pipe(
          mergeMap((response) => [
            ClaimActions.responseGetAll({
              response,
            }),
            ClaimActions.setLoadingClaims({ isLoading: false }),
          ]),
        ),
      ),
    ),
  );

  public create$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ClaimActions.requestCreate),
      switchMap(({ body }) =>
        this.service.create(body).pipe(
          tap(() => {
            this.snackBar.open('Creación exitosa!', null, {
              duration: 3000,
            });
          }),
          catchError(({ error }) => {
            this.snackBar.open('Ocurrio un error en la transacción', null, {
              duration: 3000,
            });
            return of({ error });
          }),
          mergeMap((response) => {
            const actions: Action[] = [
              RootActions.setLoader({ isLoading: false }),
            ];
            if (!('error' in response)) {
              actions.push(ClaimActions.responseCreate({ response }));
            }

            return actions;
          }),
        ),
      ),
    ),
  );

  public getAllFiltered$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ClaimActions.requestGetAllFiltered),
      switchMap(({ filter }) =>
        this.service.filter(filter).pipe(
          mergeMap((response) => [
            ClaimActions.responseGetAllFiltered({
              response,
            }),
            ClaimActions.setLoadingClaims({ isLoading: false }),
          ]),
        ),
      ),
    ),
  );
}
