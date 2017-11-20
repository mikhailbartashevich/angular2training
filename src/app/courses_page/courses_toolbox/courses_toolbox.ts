import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['./courses_toolbox.css'],
  templateUrl: './courses_toolbox.ng.html'
})
export class CoursesToolbox implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Courses Toolbar` ');
  }
}
