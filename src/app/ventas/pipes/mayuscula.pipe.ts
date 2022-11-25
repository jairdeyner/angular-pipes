import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, inUppercase: boolean = true): string {
    return inUppercase ? value.toUpperCase() : value.toLowerCase();
  }
}
