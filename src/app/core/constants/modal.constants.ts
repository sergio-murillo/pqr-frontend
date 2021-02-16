import { trigger, transition, style, animate } from '@angular/animations';

export enum ModalWidth {
  MOBILE = '312px',
  TABLET = '500px',
}

// Animación para modal
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '100ms linear',
      style({
        opacity: 1,
      }),
    ),
  ]),
]);
