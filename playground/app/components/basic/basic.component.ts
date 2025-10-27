import { Component } from '@angular/core';
import { FsLinkDirective } from '../../../../src/app/directives/link.directive';

@Component({
    selector: 'basic',
    templateUrl: 'basic.component.html',
    standalone: true,
    imports: [FsLinkDirective]
})
export class BasicComponent {

  public content = 'www.zombo.com';
}
