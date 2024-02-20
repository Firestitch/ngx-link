import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsLinkModule } from '@firestitch/link';
import { FsMessageModule } from '@firestitch/message';

import { AppMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { NewComponent } from './components/new/new.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsLinkModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        FirstExampleComponent,
        BasicComponent,
        NewComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
