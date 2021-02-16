import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  CLAIM,
  HOME,
  REQUEST,
} from '@src/app/core/constants/navigation.constants';

/**
 * Componente encargado del header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly home: string[] = HOME;
  public readonly claims: string[] = CLAIM;
  public readonly requests: string[] = REQUEST;

  constructor(private router: Router) {}

  public redirect(path: string[]): void {
    this.router.navigate(path);
  }
}
