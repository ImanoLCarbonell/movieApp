import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
 
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
  
}
