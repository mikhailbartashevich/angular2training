import {Component, OnInit} from '@angular/core';

import {CourseDetails} from '../../course_details_model';
import {CoursesService} from '../../services';

import './courses_page_component.css';
import './courses_page_component.ng.html';

@Component({
  selector: 'courses-page',
  styleUrls: ['./courses_page_component.css'],
  templateUrl: './courses_page_component.ng.html',
})
export class CoursesPageComponent implements OnInit {
  private courses: CourseDetails[];

  constructor(private coursesService: CoursesService) {}

  public ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  private onDeleteCourse_(course: CourseDetails) {
    this.courses = this.coursesService.removeCourse(course);
  }
}
