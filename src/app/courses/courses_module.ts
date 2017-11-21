import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CoursesPageComponent} from './courses_page_component';
import {CourseListComponent} from './course_list_component/course_list_component';
import {CourseItemComponent} from './course_item_component/course_item_component';
import {CoursesToolboxComponent} from './courses_toolbox_component/courses_toolbox_component';
import {SharedModule} from '../shared/shared_module';
import {CoreModule} from '../core/core_module';

@NgModule({
  imports: [FormsModule, CoreModule, CommonModule, SharedModule],
  declarations: [
    CoursesPageComponent,
    CourseListComponent,
    CourseItemComponent,
    CoursesToolboxComponent
  ],
  providers: [],
  exports: [CoursesPageComponent]
})
export class CoursesModule {}
