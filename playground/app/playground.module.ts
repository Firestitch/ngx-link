import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsLinkModule } from '@firestitch/link';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { ToastrModule } from 'ngx-toastr';

import { AppMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { NewComponent } from './components/new/new.component';
import { BasicComponent } from './components/basic/basic.component';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsLinkModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsMessageModule.forRoot(),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    BasicComponent,
    NewComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
