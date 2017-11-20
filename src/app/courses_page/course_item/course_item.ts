import {Component, OnInit, EventEmitter} from '@angular/core';
import {Input, Output} from '@angular/core/src/metadata/directives';
import {CourseDetails} from './course_details';

@Component({
  selector: 'course-item',
  styleUrls: ['./course_item.css'],
  templateUrl: './course_item.ng.html'
})
export class CourseItem implements OnInit {
  @Input() courseDetails: CourseDetails;
  @Output() deleteCourse: EventEmitter<CourseDetails> = new EventEmitter();

  private onDeleteCourseButtonClick_() {
    this.deleteCourse.emit(this.courseDetails);
  }
}
