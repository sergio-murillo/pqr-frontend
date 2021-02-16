import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RootFacade } from '@core/store/root.facade';
import { Request } from '@src/app/core/entities/common.entities';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Componente encargada de visualizar peticiones/quejas
 */
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRequestComponent implements OnInit {
  constructor(private facade: RootFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!!this.responseType) {
      this.facade.requestGetById(this.responseType);
    }
  }

  get responseType(): string {
    return this.route.snapshot.params.id;
  }

  get request$(): Observable<Request> {
    return this.facade.getById$.pipe(filter((data) => !!data));
  }
}
