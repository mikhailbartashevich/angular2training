import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CourseDetails} from '../../course_details_model';

import './course_list_component.css';
import './course_list_component.ng.html';

@Component({
  selector: 'course-list',
  styleUrls: ['./course_list_component.css'],
  templateUrl: './course_list_component.ng.html'
})
export class CourseListComponent {
  @Input() public courses: CourseDetails[];
  @Output() public deleteCourse = new EventEmitter<CourseDetails>();

  public onDeleteCourse(course: CourseDetails) {
    this.deleteCourse.emit(course);
  }

  public trackByCourseId(index, course: CourseDetails) {
    return course.id;
  }
}
