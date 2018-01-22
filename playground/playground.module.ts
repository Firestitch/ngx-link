import './vendor.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsLinkerModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    // Angular
    BrowserModule,
    FsLinkerModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
