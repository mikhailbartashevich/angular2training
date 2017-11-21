import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shared-footer',
  styleUrls: ['./footer_component.css'],
  templateUrl: './footer_component.ng.html'
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Courses Footer` ');
  }
}
