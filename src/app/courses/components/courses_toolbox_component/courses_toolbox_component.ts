import {Component} from '@angular/core';

import './courses_toolbox_component.css';
import './courses_toolbox_component.ng.html';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['./courses_toolbox_component.css'],
  templateUrl: './courses_toolbox_component.ng.html'
})
export class CoursesToolboxComponent {
  private searchField_: string;

  private onFindButtonClick_() {
    console.log(this.searchField_);
  }
}
