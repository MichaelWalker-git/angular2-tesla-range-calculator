import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateEventPg1Component } from './create-event-pg1/create-event-pg1.component';
import { CreateEventPg2Component } from './create-event-pg2/create-event-pg2.component';
import { ViewEventsComponent } from './view-events/view-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CreateEventPg1Component,
    CreateEventPg2Component,
    ViewEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
