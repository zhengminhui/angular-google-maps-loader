import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoogleMapModule } from './google-map/google-map.module';

@NgModule({
  imports: [
    BrowserModule,
    GoogleMapModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
