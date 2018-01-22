import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLinkerDirective } from './fs-linker.directive';

@NgModule({
  imports: [
    // Angular
    CommonModule,
  ],
  exports: [
    FsLinkerDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsLinkerDirective
  ],
  providers: [
  ],
})
export class FsLinkerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsLinkerModule,
      providers: []
    };
  }
}
