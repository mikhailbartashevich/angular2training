import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule, ApplicationRef} from '@angular/core';
import {removeNgStyles,createNewHosts,createInputTransfer} from '@angularclass/hmr';
import {RouterModule,PreloadAllModules} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app_routes';
// App is our top level component
import {AppComponent} from './app_component';
import {APP_RESOLVER_PROVIDERS} from './app_resolver';
import {AppState, InternalStateType} from './app_service';
import {NoContent} from './no_content';

import '../styles/styles.scss';
import '../styles/headings.css';

import {CoursesPageComponent} from './courses_page_component';
import {CoursesFooterComponent} from './courses_page_component/courses_footer_component';
import {CoursesHeaderComponent} from './courses_page_component/courses_header_component';
import {CourseListComponent} from './courses_page_component/course_list_component';
import {CourseItemComponent} from './courses_page_component/course_item_component';
import {CoursesToolboxComponent} from './courses_page_component/courses_toolbox_component';
import {LoginPageComponent} from './login_page_component';
import {TimeMsPipe} from './pipes/time_pipe';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    CoursesPageComponent,
    CoursesHeaderComponent,
    CoursesFooterComponent,
    CourseItemComponent,
    CourseListComponent,
    CoursesToolboxComponent,
    LoginPageComponent, // courses
    AppComponent,
    NoContent,
    TimeMsPipe,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues  = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
