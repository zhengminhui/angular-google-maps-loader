import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleMapComponent } from './google-map.component';

@NgModule({
  declarations: [
    GoogleMapComponent,
  ],
  exports: [
    GoogleMapComponent,
  ],
  imports: [],
  providers: [],
})
export class GoogleMapModule {}
