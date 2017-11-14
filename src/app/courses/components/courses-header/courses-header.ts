import {
    Component,
    OnInit
  } from '@angular/core';

@Component({
  selector: 'courses-header',
  styleUrls: ['./courses-header.css'],
  templateUrl: './courses-header.html'
})

export class CoursesHeaderComponent implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Courses Header` ');
  }

}
