import { ElementRef } from '@angular/core';

export const scrollear = (element: ElementRef, position: number = 0) => {
  element.nativeElement.scrollTop = position;
};
