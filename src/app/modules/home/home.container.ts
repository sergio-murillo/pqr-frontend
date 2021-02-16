import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  CLAIM,
  CLAIM_SAVE,
  REQUEST,
  REQUEST_SAVE,
} from '@src/app/core/constants/navigation.constants';

/**
 * Componente container encargado del menu principal
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainer {
  public readonly claims: string[] = CLAIM;
  public readonly claimSave: string[] = CLAIM_SAVE;
  public readonly requests: string[] = REQUEST;
  public readonly requestSave: string[] = REQUEST_SAVE;

  constructor(private router: Router) {}

  public redirect(path: string[]): void {
    this.router.navigate(path);
  }
}
