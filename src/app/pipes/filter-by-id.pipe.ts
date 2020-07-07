import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAmbulanceId'
})
export class FilterByAmbulanceIdPipe implements PipeTransform {

  transform(list: any[], id: number): unknown {
    return list.filter( element => element.ambulanceId === id);
  }
}
