import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimeMsPipe} from './time_pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeMsPipe],
  providers: [],
  exports: [TimeMsPipe]
})
export class CoreModule {}
