import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppState} from './app_service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app_component.css'],
  templateUrl: 'app_component.ng.html'
})
export class AppComponent implements OnInit {
  constructor(public appState: AppState) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
