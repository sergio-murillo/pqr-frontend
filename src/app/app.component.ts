import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServiceWorkerService } from './core/services/service-worker.service';
import { RootFacade } from './core/store/root.facade';
import { IWebStorageService } from './core/entities/browser.entities';

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
}
