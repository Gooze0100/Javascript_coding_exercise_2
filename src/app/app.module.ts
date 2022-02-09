import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { MoreBtnDirective } from './directives/more-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MoreBtnDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
