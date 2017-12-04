import {Component} from '@angular/core';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['./courses_toolbox_component.css'],
  templateUrl: './courses_toolbox_component.ng.html'
})
export class CoursesToolboxComponent {
  private searchField_: string;
  //TODO: form onsubmit
  public onFindButtonClick() {
    console.log(this.searchField_);
  }
}
