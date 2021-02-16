import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as routes from './common.api';
import { urlBuilder } from '@core/helpers/url-builder.helper';
import { environment as ENV } from '@environment';
import {
  ListCustomer,
  ListRequest,
  Request,
} from '../entities/common.entities';

/**
 * Cliente encargado de los servicios de request (Petición/Queja)
 */
@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<ListRequest> {
    const url = urlBuilder(ENV.api.request + routes.default.findAll);
    return this.http.get<ListRequest>(url);
  }

  public findById(id: string): Observable<Request> {
    const url = urlBuilder(ENV.api.request + routes.default.findById, { id });
    return this.http.get<Request>(url);
  }

  public filter(filter: string): Observable<ListRequest> {
    const url = urlBuilder(ENV.api.request + routes.default.filter, { filter });
    return this.http.get<ListRequest>(url);
  }

  public findAllCustomers(): Observable<ListCustomer> {
    const url = urlBuilder(ENV.api.customer + routes.default.findAll);
    return this.http.get<ListCustomer>(url);
  }
}
