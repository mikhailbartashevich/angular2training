import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'coursesTimeMsPipe'})
export class TimeMsPipe implements PipeTransform {

  public transform(value: number): string {
    return this.msToTime(value);
  }

  private msToTime(duration: number): string {
    let milliseconds = (duration % 1000) /  100;
    let seconds = Math.round((duration / 1000) % 60);
    let minutes = Math.round((duration / (1000 * 60)) % 60);
    let hours = Math.round((duration / (1000 * 60 * 60)) % 24);

    let hoursString = (hours < 10) ? '0' + hours : hours;
    let minutesString = (minutes < 10) ? '0' + minutes : minutes;
    let secondsString = (seconds < 10) ? '0' + seconds : seconds;

    return `${hoursString} : ${minutesString} : ${secondsString}`;
  }
}
