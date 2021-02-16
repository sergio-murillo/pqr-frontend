import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClaimFacade } from './store/claim.facade';

/**
 * Componente container encargado de encapsular todos los componentes para reclamos
 */
@Component({
  styleUrls: ['./claim.container.sass'],
  templateUrl: 'claim.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaimContainer implements OnInit {
  public form: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private facade: ClaimFacade) {}

  ngOnInit() {}
}
