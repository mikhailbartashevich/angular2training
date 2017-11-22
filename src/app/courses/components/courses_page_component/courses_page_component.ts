import {Component, OnInit} from '@angular/core';

import {CourseDetails} from './course_details_model';

import './courses_page_component.css';
import './courses_page_component.ng.html';

@Component({
  selector: 'courses-page',
  styleUrls: ['./courses_page_component.css'],
  templateUrl: './courses_page_component.ng.html',
})
export class CoursesPageComponent implements OnInit {
  private courses: CourseDetails[];

  constructor() {
    this.courses = [];
  }

  public ngOnInit() {
    this.courses.push({
      id: 1,
      title: 'First course',
      description: 'First description',
      duration_ms: 100000,
      creation_date_ms: 1511188015987,
    });

    this.courses.push({
      id: 2,
      title: 'Second course',
      description: 'Second description',
      duration_ms: 110000,
      creation_date_ms: 1511188015987,
    });

    this.courses.push({
      id: 3,
      title: 'Third course',
      description: 'Third description',
      duration_ms: 120000,
      creation_date_ms: 1511188015987,
    });
  }
}
