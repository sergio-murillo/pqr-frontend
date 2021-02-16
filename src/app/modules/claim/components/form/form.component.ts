import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from '@src/app/core/constants/common.constants';
import { AutoCompleteItem } from '@src/app/core/entities/common.entities';
import { CreateClaim } from '../../entities/claim.entities';

/**
 * Componente encargada de generar el formulario de creación de reclamos
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public formSubmitted: boolean = false;

  @Input() requestItems: AutoCompleteItem[] = [];

  @Output() save: EventEmitter<CreateClaim> = new EventEmitter();

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  private initForm(): FormGroup {
    return new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        request: new FormControl('', [Validators.required]),
      },
      { updateOn: 'change' },
    );
  }

  public saveClaim(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.save.emit({
        title: this.formGroup.get('title').value,
        description: this.formGroup.get('description').value,
        requestId: this.formGroup.get('request').value,
        state: State.CREATED,
      });
      this.formSubmitted = false;
    }
  }

  public errorInput(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return (
      (control.touched || control.dirty || this.formSubmitted) &&
      !!control.errors
    );
  }
}
