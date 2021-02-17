import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!value) {
      return;
    }
    if (args === 'newest') {
       return value.sort((a, b) => <any>new Date(b.date) - <any>new Date(a.date) );
    }
    if (args === 'oldest') {
       return value.sort((a, b) => <any>new Date(a.date) - <any>new Date(b.date) );
    }
  }

}
