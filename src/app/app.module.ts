import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';
import { HeoresModule } from './heroes/horoes.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
