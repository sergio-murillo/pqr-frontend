import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TranslateServiceMock {
  public get(
    key: string | Array<string>,
    interpolateParams?: any
  ): Observable<string | any> {
    return of({});
  }
}
