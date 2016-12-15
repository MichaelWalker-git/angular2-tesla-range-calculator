import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { BatteryService } from './containers/tesla-battery/tesla-battery.service';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';

@NgModule({
  declarations: [
    AppComponent,
    TeslaBatteryComponent,
    TeslaCarComponent
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
