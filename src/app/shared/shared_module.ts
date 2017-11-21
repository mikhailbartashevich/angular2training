import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer_component';
import {HeaderComponent} from './header_component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent],
  providers: [],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}
