import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-footer',
  styleUrls: ['./courses_footer_component.css'],
  templateUrl: './courses_footer_component.ng.html'
})
export class CoursesFooterComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Footer` ');
  }
}
