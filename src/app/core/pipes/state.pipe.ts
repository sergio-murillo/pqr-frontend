import { Pipe, PipeTransform } from '@angular/core';
import { AssignState } from '../constants/common.constants';

@Pipe({
  name: 'state',
})
export class StatePipe implements PipeTransform {
  public transform(value: string): string {
    if (!!value) {
      return `COMMONS.STATES.${AssignState[value]}`;
    }

    return value;
  }
}
