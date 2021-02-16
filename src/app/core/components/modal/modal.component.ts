import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

import { ModalWidth, fadeIn } from '../../constants/modal.constants';

/**
 * Componente encargado de los modales
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @ViewChild('footer', { static: false }) footer: ElementRef;
  @Input() id: string;
  @Input() widthModal: ModalWidth;
  @Input() set showModal(show: boolean) {
    this.showModal$ = show;
    if (!show) {
      this.counterClicks = 0;
    }
  }
  @Input() className: string = '';
  @Input() amountClicksBeforeShow: number = 1;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  public customWidth = ModalWidth;
  public counterClicks: number = 0;
  public showModal$: boolean;

  @HostListener('document:keydown.escape', ['$event'])
  escapeKeyDown(): void {
    this.closeModal.emit();
  }
}
