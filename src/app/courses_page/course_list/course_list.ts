import {Component, Input} from '@angular/core';
import {CourseDetails} from '../course_details/course_details';

@Component({
  selector: 'course-list',
  styleUrls: ['./course_list.css'],
  templateUrl: './course_list.ng.html'
})
export class CourseList {
  @Input() public courses: CourseDetails[];

  private onDeleteCourse_(course: CourseDetails) {
    console.log(course);
  }
}
