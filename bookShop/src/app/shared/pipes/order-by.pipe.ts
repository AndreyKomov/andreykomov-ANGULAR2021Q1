import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any, field: string, sortDirection?: boolean) {
    const newArr = arr.sort((a: any, b: any) => {
      if (sortDirection) {
        if (a[field][0] > b[field][0]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a[field][0] > b[field][0]) {
          return -1;
        } else {
          return 1;
        }
      }

    });

    return newArr;
  }

}
