import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as routes from '../request.api';
import { urlBuilder } from '@core/helpers/url-builder.helper';
import { environment as ENV } from '@environment';
import { CreateRequest } from '../entities/request.entities';
import { Request } from '@core/entities/common.entities';

/**
 * Cliente encargado de los servicios de request (Petición/Queja)
 */
@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  public create(claim: CreateRequest): Observable<Request> {
    const url = urlBuilder(ENV.api.request + routes.default.create);
    return this.http.post<Request>(url, claim);
  }
}
