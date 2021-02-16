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
import { CreateRequest } from '../../entities/request.entities';

/**
 * Componente encargada de generar el formulario de creación de petición/quejas
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  private formSubmitted: boolean = false;

  @Input() customersItems: AutoCompleteItem[] = [];

  @Output() save: EventEmitter<CreateRequest> = new EventEmitter();

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  private initForm(): FormGroup {
    return new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        customer: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
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
        state: State.CREATED,
        clientId: this.formGroup.get('customer').value,
        type: this.formGroup.get('type').value,
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
