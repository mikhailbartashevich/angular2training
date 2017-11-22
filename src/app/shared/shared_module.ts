import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import * as components from './components';
import * as pipes from './pipes';
import * as services from './services';

function toArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

const declarations = [...toArray(components), ...toArray(pipes)];
const providers = [...toArray(services)];

@NgModule({
  imports: [CommonModule],
  declarations: [...declarations],
  providers: [...providers],
  exports: [...declarations]
})
export class SharedModule {}
