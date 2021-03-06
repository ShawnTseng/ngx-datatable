import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoggyTableComponent } from './doggy-table/doggy-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DoggyTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
