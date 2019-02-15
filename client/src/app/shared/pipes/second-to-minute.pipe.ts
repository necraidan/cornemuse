import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToMinute'
})
export class SecondToMinutePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const secondes: number = Math.round(value - minutes * 60);
    return minutes + ':' + (secondes < 10 ? '0' : '') + secondes;
  }
}
