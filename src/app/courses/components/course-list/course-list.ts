import {
    Component,
    OnInit
  } from '@angular/core';

@Component({
  selector: 'course-list',
  styleUrls: ['./course-list.css'],
  templateUrl: './course-list.html'
})

export class CourseListComponent implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Course list` ');
  }

}
