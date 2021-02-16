import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AutoCompleteItem, Request } from '@core/entities/common.entities';
import { RootFacade } from '@core/store/root.facade';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CreateClaim } from '../../entities/claim.entities';
import { ClaimFacade } from '../../store/claim.facade';

/**
 * Componente encargada de crear un reclamo
 */
@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateClaimComponent implements OnInit {
  constructor(
    public claimFacade: ClaimFacade,
    private rootFacade: RootFacade,
  ) {}

  ngOnInit() {
    this.rootFacade.requestGetAll();
  }

  public saveClaim(create: CreateClaim): void {
    this.claimFacade.requestCreate(create);
    this.rootFacade.setLoader(true);
  }

  get requests$(): Observable<Request[]> {
    return this.rootFacade.getAll$.pipe(
      filter((data) => !!data),
      map((data) => data.response),
    );
  }

  get requestsAutocomplete$(): Observable<AutoCompleteItem[]> {
    return this.rootFacade.getAll$.pipe(
      filter((data) => !!data && !!data.response),
      map((data) =>
        data.response.map((item) => ({
          code: item.id,
          name: `${item.id}`,
          filter: item.id,
        })),
      ),
    );
  }
}
