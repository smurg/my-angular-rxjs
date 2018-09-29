import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { HomeComponent } from './home/home.component';
/**
 * in order to use angular 6 material, we need to import all components we wanna use from Angular Material
 * we do it directly inside MaterialModule to keep this one clean.
 */


@NgModule({
  declarations: [
    AppComponent,
    DebounceSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
