import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login/login_page_component/login_page_component';
import {SharedModule} from '../../shared/shared_module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class LoginModule {}
