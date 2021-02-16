import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Componente container encargado de encapsular todos los componentes para peticiones y quejas
 */
@Component({
  selector: 'app-request',
  templateUrl: './request.container.html',
  styleUrls: ['./request.container.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestContainer {}
