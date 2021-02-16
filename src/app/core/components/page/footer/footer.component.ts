import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente encargado del footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
