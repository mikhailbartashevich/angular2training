import {Component, OnInit} from '@angular/core';

import './header_component.css';
import './header_component.ng.html';

@Component({
  selector: 'shared-header',
  styleUrls: ['./header_component.css'],
  templateUrl: './header_component.ng.html'
})
export class HeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Header` ');
  }
}
