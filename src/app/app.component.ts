import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ServiceWorkerService } from './core/services/service-worker.service';
import { RootFacade } from './core/store/root.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly defaultLang: string = 'es';
  public subscriptions: Array<Subscription> = [];

  constructor(
    private translateService: TranslateService,
    public router: Router,
    private sw: ServiceWorkerService,
    private rootFacade: RootFacade,
  ) {
    this.translateService.setDefaultLang(this.defaultLang);
    this.translateService.use(this.defaultLang);
  }

  ngOnInit(): void {
    this.sw.forceUpdate();
    this.sw.checkForUpdate();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  get isLoading$(): Observable<boolean> {
    return this.rootFacade.isLoading$;
  }
}
