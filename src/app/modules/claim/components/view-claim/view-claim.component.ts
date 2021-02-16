import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Claim } from '../../entities/claim.entities';
import { ClaimFacade } from '../../store/claim.facade';

/**
 * Componente encargada de visualizar reclamos
 */
@Component({
  selector: 'app-view-claim',
  templateUrl: './view-claim.component.html',
  styleUrls: ['./view-claim.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewClaimComponent implements OnInit {
  constructor(private facade: ClaimFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!!this.responseType) {
      this.facade.requestGetById(this.responseType);
    }
  }

  get responseType(): string {
    return this.route.snapshot.params.id;
  }

  get claim$(): Observable<Claim> {
    return this.facade.getById$.pipe(filter((data) => !!data));
  }
}
