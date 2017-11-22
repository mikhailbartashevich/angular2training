import {Component, OnInit} from '@angular/core';

import './footer_component.css';
import './footer_component.ng.html';

@Component({
  selector: 'shared-footer',
  styleUrls: ['./footer_component.css'],
  templateUrl: './footer_component.ng.html'
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Footer` ');
  }
}
