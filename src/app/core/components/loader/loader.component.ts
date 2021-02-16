import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente encargado del loader
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
