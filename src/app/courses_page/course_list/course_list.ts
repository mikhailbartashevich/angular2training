import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'course-list',
  styleUrls: ['./course_list.css'],
  templateUrl: './course_list.ng.html'
})
export class CourseList implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Course list` ');
  }
}
