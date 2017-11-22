import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app_routes';
// App is our top level component
import {AppComponent} from './app_component';
import {APP_RESOLVER_PROVIDERS} from './app_resolver';

import {LoginModule} from './root-modules/login/login_module';
import {CoursesModule} from './courses/courses_module';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
];

const angularModules = [
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(ROUTES, {
    useHash: Boolean(history.pushState) === false,
    preloadingStrategy: PreloadAllModules
  })
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    LoginModule,
    CoursesModule,
    ...angularModules,
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
