import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCustomer',
})
export class FormatCustomerPipe implements PipeTransform {
  public transform(value: any): string {
    return `${value?.identification_number} - ${value?.first_name} ${value?.last_name}`;
  }
}
