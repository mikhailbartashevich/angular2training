import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseDetails} from '../../course_details_model';

@Component({
  selector: 'course-item',
  styleUrls: ['./course_item_component.css'],
  templateUrl: './course_item_component.ng.html'
})
export class CourseItemComponent implements OnInit {
  @Input() public courseDetails: CourseDetails;
  @Output() public deleteCourse = new EventEmitter<CourseDetails>();

  public ngOnInit() {
    console.log('hello `Course item` ');
  }

  public onDeleteCourseButtonClick() {
    this.deleteCourse.emit(this.courseDetails);
  }
}
