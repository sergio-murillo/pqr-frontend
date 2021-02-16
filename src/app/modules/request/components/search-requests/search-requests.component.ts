import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Request } from '@src/app/core/entities/common.entities';
import { RootFacade } from '@src/app/core/store/root.facade';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map } from 'rxjs/operators';
import { RequestFacade } from '../../store/request.facade';

/**
 * Componente encargada de buscar una petición/queja
 */
@Component({
  selector: 'app-search-requests',
  templateUrl: './search-requests.component.html',
  styleUrls: ['./search-requests.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchRequestsComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private facade: RootFacade,
    private requestFacade: RequestFacade,
    private router: Router,
  ) {
    requestFacade.setLoadingClaims(true);
    facade.requestGetAll();
  }

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  private initForm(): FormGroup {
    return new FormGroup(
      {
        search: new FormControl('', []),
      },
      { updateOn: 'change' },
    );
  }

  public search(): void {
    const value = this.formGroup.get('search').value;
    this.requestFacade.setLoadingClaims(true);
    if (!value) {
      this.facade.requestGetAll();
    } else {
      this.facade.requestGetAllFiltered(value);
    }
  }

  public viewRequest(id: string): void {
    this.router.navigate(['/request/' + id]);
  }

  get requests$(): Observable<Request[]> {
    return this.facade.getAll$.pipe(
      filter((requests) => !!requests),
      map((requests) => requests.response),
    );
  }

  get isLoadingRequests$(): Observable<boolean> {
    return this.requestFacade.isLoadingRequests$;
  }
}
