import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-header',
  styleUrls: ['./courses_header.css'],
  templateUrl: './courses_header.ng.html'
})
export class CoursesHeader implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Courses Header` ');
  }
}
