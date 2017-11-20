import { Routes } from '@angular/router';
import {NoContent} from './no_content';
import {AppComponent} from './app_component';

export const ROUTES: Routes = [
  {path: '',      component: AppComponent},
  {path: '**',    component: NoContent},
];
