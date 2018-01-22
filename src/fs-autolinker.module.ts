import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsAutolinkerDirective } from './fs-autolinker.directive';

@NgModule({
  imports: [
    // Angular
    CommonModule,
  ],
  exports: [
    FsAutolinkerDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsAutolinkerDirective
  ],
  providers: [
  ],
})
export class FsAutolinkerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsAutolinkerModule,
      providers: []
    };
  }
}
