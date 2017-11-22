import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared_module';
import {LoginPageComponent} from './login_page_component/login_page_component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class LoginModule {}
