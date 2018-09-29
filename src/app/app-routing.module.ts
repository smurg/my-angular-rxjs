import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
/*
You generally don't declare components in a routing module
so you can delete the @NgModule.declarations array and delete CommonModule references too.
*/

/**
 *
 * Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
  A typical Angular Route has two properties:
   - path: a string that matches the URL in the browser address bar.
   - component: the component that the router should create when navigating to this route.

RouterModule.forRoot()
  You first must initialize the router and start it listening for browser location changes.
  Add RouterModule to the @NgModule.imports array and configure it with the routes in one step
  by calling RouterModule.forRoot() within the imports array
  forRoot():
    The method is called forRoot() because you configure the router at the application's root level.
    The forRoot() method supplies the service providers and directives needed for routing,
    and performs the initial navigation based on the current browser URL.
 */
const routes: Routes = [
  { path: 'mysearch', component: DebounceSearchComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
