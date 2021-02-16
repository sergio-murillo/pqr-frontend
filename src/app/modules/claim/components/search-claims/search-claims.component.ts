import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map } from 'rxjs/operators';
import { Claim } from '../../entities/claim.entities';
import { ClaimFacade } from '../../store/claim.facade';

/**
 * Componente encargada de buscar un reclamo
 */
@Component({
  selector: 'app-search-claims',
  templateUrl: './search-claims.component.html',
  styleUrls: ['./search-claims.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchClaimsComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private facade: ClaimFacade, private router: Router) {
    facade.setLoadingClaims(true);
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
    this.facade.setLoadingClaims(true);
    if (!value) {
      this.facade.requestGetAll();
    } else {
      this.facade.requestGetAllFiltered(value);
    }
  }

  public viewClaim(id: string): void {
    this.router.navigate(['/claim/' + id]);
  }

  get claims$(): Observable<Claim[]> {
    return this.facade.getAll$.pipe(
      filter((claims) => !!claims),
      map((claims) => claims.response),
    );
  }

  get isLoadingClaims$(): Observable<boolean> {
    return this.facade.isLoadingClaims$;
  }
}
