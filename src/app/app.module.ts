import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObeserveComponent } from './obeserve/obeserve.component';

@NgModule({
 angular-forms
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],

  declarations: [
    AppComponent,
    ObeserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 main
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
