import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLinkDirective } from './fs-link.directive';

@NgModule({
  imports: [
    // Angular
    CommonModule,
  ],
  exports: [
    FsLinkDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsLinkDirective
  ],
  providers: [
  ],
})
export class FsLinkModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsLinkModule,
      providers: []
    };
  }
}
