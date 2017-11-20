import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-header',
  styleUrls: ['./courses_header_component.css'],
  templateUrl: './courses_header_component.ng.html'
})
export class CoursesHeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Header` ');
  }
}
