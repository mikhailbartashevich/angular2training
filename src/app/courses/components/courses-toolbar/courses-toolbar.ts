import {
  Component,
  OnInit
} from '@angular/core';

@Component({
selector: 'courses-toolbar',
styleUrls: ['./courses-toolbar.css'],
templateUrl: './courses-toolbar.html'
})

export class CoursesToolbarComponent implements OnInit {
public localState = { value: '' };

public ngOnInit() {
  console.log('hello `Courses Toolbar` ');
}

}
