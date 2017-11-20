import {Component, OnInit} from '@angular/core';

import { AppState } from '../app_service';

@Component({
  selector: 'courses-page',
  styleUrls: ['./courses_page.css'],
  templateUrl: './courses_page.ng.html',
})
export class CoursesPage implements OnInit {
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
