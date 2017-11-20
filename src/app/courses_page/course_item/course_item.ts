import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseDetails} from '../course_details/course_details';

@Component({
  selector: 'course-item',
  styleUrls: ['./course_item.css'],
  templateUrl: './course_item.ng.html'
})
export class CourseItem implements OnInit {
  @Input() public courseDetails: CourseDetails;
  @Output() public deleteCourse: EventEmitter<CourseDetails> = new EventEmitter();

  public ngOnInit() {
    console.log('hello `Course item` ');
  }

  private onDeleteCourseButtonClick_() {
    this.deleteCourse.emit(this.courseDetails);
  }
}
