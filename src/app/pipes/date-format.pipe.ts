import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  defaultFormat = 'dd/MM/yyyy';

  transform(value: Date, format?: string): string {
    if(!format) {
      format = this.defaultFormat;
    }
    return formatDate(value, format, 'en');
  }

}
