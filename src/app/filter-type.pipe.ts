import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'filterType',
  standalone: true
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Content [], type: string): Content[] {
   if (!value){
    return [];
    }

    if(!type){
    return value.filter(item => !item.type);
    }

    return value.filter(item => item.type === type);
  }
}
