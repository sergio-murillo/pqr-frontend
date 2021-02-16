import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, mergeMap, catchError, tap } from 'rxjs/operators';

import { RequestService } from '../services/request.service';
import * as RequestActions from './request.actions';
import * as RootActions from '@core/store/actions/common.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class RequestEffects {
  constructor(
    private actions$: Actions,
    private service: RequestService,
    private snackBar: MatSnackBar,
  ) {}

  public create$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestActions.requestCreate),
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
              actions.push(RequestActions.responseCreate({ response }));
            }

            return actions;
          }),
        ),
      ),
    ),
  );
}
