import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const firstLetter = value.match('^[a-zA-Z]');
    return firstLetter[0].toUpperCase() + value.substr(1);
  }

}
