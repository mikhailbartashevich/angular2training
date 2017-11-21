import {Component, Input} from '@angular/core';
import {CourseDetails} from '../course_details_model';

@Component({
  selector: 'course-list',
  styleUrls: ['./course_list_component.css'],
  templateUrl: './course_list_component.ng.html'
})
export class CourseListComponent {
  @Input() public courses: CourseDetails[];

  private onDeleteCourse_(course: CourseDetails) {
    console.log(course);
  }
}