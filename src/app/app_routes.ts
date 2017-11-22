import { Routes } from '@angular/router';
import {CoursesPageComponent} from './courses/components';
import {LoginPageComponent} from './root-modules/login/login_page_component/login_page_component';

export const ROUTES: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'courses', component: CoursesPageComponent},
  {path: 'login', component: LoginPageComponent},
];
