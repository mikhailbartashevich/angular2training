import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared_module';

import * as components from './components';
import * as services from './services';

function toArray(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

const declarations = [...toArray(components)];
const providers = [...toArray(services)];

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule],
  declarations: [...declarations],
  providers: [...providers],
  exports: [...declarations]
})
export class CoursesModule {}
