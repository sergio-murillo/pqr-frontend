import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  AutoCompleteItem,
  Customer,
  Request,
} from '@core/entities/common.entities';
import { RootFacade } from '@core/store/root.facade';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CreateRequest } from '../../entities/request.entities';
import { RequestFacade } from '../../store/request.facade';

/**
 * Componente encargada de crear una petición/queja
 */
@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRequestComponent implements OnInit {
  constructor(
    private requestFacade: RequestFacade,
    private rootFacade: RootFacade,
  ) {}

  ngOnInit() {
    this.rootFacade.requestGetAllCustomers();
  }

  public saveRequest(create: CreateRequest): void {
    this.requestFacade.requestCreate(create);
    this.rootFacade.setLoader(true);
  }

  get customers$(): Observable<Customer[]> {
    return this.rootFacade.getAllCustomers$.pipe(
      filter((data) => !!data),
      map((data) => data.response),
    );
  }

  get customersAutocomplete$(): Observable<AutoCompleteItem[]> {
    return this.rootFacade.getAllCustomers$.pipe(
      filter((data) => !!data && !!data.response),
      map((data) =>
        data.response.map((item) => ({
          code: item.identification_number,
          name: `${item.identification_number}`,
          filter: item.identification_number,
        })),
      ),
    );
  }
}
