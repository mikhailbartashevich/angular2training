import {
    Component,
    OnInit
  } from '@angular/core';

@Component({
  selector: 'courses-footer',
  styleUrls: ['./courses-footer.css'],
  templateUrl: './courses-footer.html'
})

export class CoursesFooterComponent implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `Courses Footer` ');
  }

}
