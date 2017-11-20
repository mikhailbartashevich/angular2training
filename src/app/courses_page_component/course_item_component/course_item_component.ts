import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseDetails} from '../shared/course_details_model';

@Component({
  selector: 'course-item',
  styleUrls: ['./course_item_component.css'],
  templateUrl: './course_item_component.ng.html'
})
export class CourseItemComponent implements OnInit {
  @Input() public courseDetails: CourseDetails;
  @Output() public deleteCourse: EventEmitter<CourseDetails> = new EventEmitter();

  public ngOnInit() {
    console.log('hello `Course item` ');
  }

  private onDeleteCourseButtonClick_() {
    this.deleteCourse.emit(this.courseDetails);
  }
}
