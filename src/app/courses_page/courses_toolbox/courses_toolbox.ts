import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['./courses_toolbox.css'],
  templateUrl: './courses_toolbox.ng.html'
})
export class CoursesToolbox implements OnInit {
  private searchField_: string;

  private onFindButtonClick_() {
    console.log(this.searchField_);
  }
}
