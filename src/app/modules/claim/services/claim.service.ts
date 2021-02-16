import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as routes from '../claim.api';
import { urlBuilder } from '@core/helpers/url-builder.helper';
import { Claim, CreateClaim, ListClaim } from '../entities/claim.entities';
import { environment as ENV } from '@environment';

/**
 * Cliente encargado de servicios claim
 */
@Injectable()
export class ClaimService {
  constructor(private http: HttpClient) {}

  public create(claim: CreateClaim): Observable<Claim> {
    const url = urlBuilder(ENV.api.claim + routes.default.create);
    return this.http.post<Claim>(url, claim);
  }

  public findAll(): Observable<ListClaim> {
    const url = urlBuilder(ENV.api.claim + routes.default.findAll);
    return this.http.get<ListClaim>(url);
  }

  public findById(id: string): Observable<Claim> {
    const url = urlBuilder(ENV.api.claim + routes.default.findById, { id });
    return this.http.get<Claim>(url);
  }

  public filter(filter: string): Observable<ListClaim> {
    const url = urlBuilder(ENV.api.claim + routes.default.filter, { filter });
    return this.http.get<ListClaim>(url);
  }
}
