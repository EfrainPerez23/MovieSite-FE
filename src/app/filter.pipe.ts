import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './global/models/Movie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: Movie[], searchText: string): any[] {
    if (!values) {
      return [];
    }
    if (!searchText) {
      return values;
    }

    searchText = searchText.toLowerCase();

    return values.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
