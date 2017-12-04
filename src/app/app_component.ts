import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Native,//Emulated?
  styleUrls: ['./app_component.css'],
  templateUrl: 'app_component.ng.html'
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    console.log('Initial App');
  }
}
