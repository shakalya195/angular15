import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, key: string, sortOrder='desc'): Array<string> {
    array.sort((a: any, b: any) => {
      return <any>new Date(b[key]) - <any>new Date(a[key]);
    });
    return array;
  }


}
