import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perfumePriceFilter',
  standalone: true
})
export class PerfumePriceFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
