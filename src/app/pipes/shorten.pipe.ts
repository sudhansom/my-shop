import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    return value.substr(0, 12) + ' ...';
  }
}
