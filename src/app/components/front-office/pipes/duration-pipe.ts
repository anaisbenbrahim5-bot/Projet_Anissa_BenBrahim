import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    let  mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins}min`;
    }
    
    return `${minutes} min`;
  }

    
  }
