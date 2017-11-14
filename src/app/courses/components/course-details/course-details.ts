import {
    Component,
    OnInit
  } from '@angular/core';

@Component({
  selector: 'course-details',
  styleUrls: ['./course-details.css'],
  templateUrl: './course-details.html'
})

export class CourseDetailsComponent implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Course list` ');
  }

}
