import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'course-details',
  styleUrls: ['./course_details.css'],
  templateUrl: './course_details.ng.html'
})
export class CourseDetails implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Course list` ');
  }
}
