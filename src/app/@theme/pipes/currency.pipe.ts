import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'myCurrency' })
export class CurrencyPipe implements PipeTransform {

  transform(currency: string): string {
    return '$';
  }
}
