import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

/**
 * Clase encargada gestionar el SW de la aplicación
 */
@Injectable({ providedIn: 'root' })
export class ServiceWorkerService {
  constructor(private updates: SwUpdate, private appRef: ApplicationRef) {}

  public forceUpdate(): void {
    this.updates.available.subscribe((event) => {
      console.log(`Event forceUpdate(): ${event}`);
      this.updates.activateUpdate().then(() => document.location.reload());
    });
  }

  public checkForUpdate(): void {
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true),
    );
    const everyThreeHours$ = interval(3 * 60 * 60 * 1000);
    const everyThreeHoursOnceAppIsStable$ = concat(
      appIsStable$,
      everyThreeHours$,
    );
    everyThreeHoursOnceAppIsStable$.subscribe(() =>
      this.updates
        .checkForUpdate()
        .then(() =>
          console.log(`Version validation successful at ${Date.now}`),
        ),
    );
  }
}
