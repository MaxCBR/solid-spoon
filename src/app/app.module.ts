import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Goal1Component } from './components/goal1/goal1.component';
import { Goal2Component } from './components/goal2/goal2.component';

@NgModule({
  declarations: [AppComponent, Goal1Component, Goal2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
