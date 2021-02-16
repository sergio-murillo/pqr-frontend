import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRequest',
})
export class FormatClaimPipe implements PipeTransform {
  public transform(value: any): string {
    return `${value?.id} - ${value?.title}`;
  }
}
