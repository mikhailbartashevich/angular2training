import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shared-header',
  styleUrls: ['./header_component.css'],
  templateUrl: './header_component.ng.html'
})
export class HeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Header` ');
  }
}
