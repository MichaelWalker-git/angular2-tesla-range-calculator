import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { BatteryService } from './containers/tesla-battery/tesla-battery.service';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

@NgModule({
  declarations: [
    AppComponent,
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent,
    TeslaWheelsComponent
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
