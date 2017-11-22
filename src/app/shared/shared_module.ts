import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import * as components from './components';
import * as pipes from './pipes';

function toArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

const declarations = [...toArray(components), ...toArray(pipes)];

@NgModule({
  imports: [CommonModule],
  declarations: [...declarations],
  providers: [],
  exports: [...declarations]
})
export class SharedModule {}
