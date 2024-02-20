import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLinkDirective } from './directives/link.directive';

@NgModule({
    imports: [
        // Angular
        CommonModule,
    ],
    exports: [
        FsLinkDirective
    ],
    declarations: [
        FsLinkDirective
    ],
    providers: []
})
export class FsLinkModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FsLinkModule,
  //     providers: []
  //   };
  // }
}
