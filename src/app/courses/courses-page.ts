import {
    Component,
    OnInit
  } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'courses-page',
  styleUrls: ['./courses-page.css'],
  templateUrl: './courses-page.html',
})

export class CoursesPageComponent implements OnInit {
  public localState = { value: '' };

  constructor(public appState: AppState) {}

  public ngOnInit() {
    console.log('hello `Courses Page` ');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  private onInput_(value: string) {
    this.localState.value = value;
  }
}
