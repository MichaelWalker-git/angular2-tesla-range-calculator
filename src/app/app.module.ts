import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { BatteryService } from './containers/tesla-battery/tesla-battery.service';

@NgModule({
  declarations: [
    AppComponent,
    TeslaBatteryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
