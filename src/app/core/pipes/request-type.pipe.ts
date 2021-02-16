import { Pipe, PipeTransform } from '@angular/core';
import { AssignType } from '../constants/common.constants';

@Pipe({
  name: 'requestType',
})
export class RequestTypePipe implements PipeTransform {
  public transform(value: string): string {
    if (!!value) {
      return AssignType[value];
    }

    return value;
  }
}
