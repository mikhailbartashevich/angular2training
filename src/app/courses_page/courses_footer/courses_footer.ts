import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'courses-footer',
  styleUrls: ['./courses_footer.css'],
  templateUrl: './courses_footer.ng.html'
})

export class CoursesFooter implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Courses Footer` ');
  }

}
