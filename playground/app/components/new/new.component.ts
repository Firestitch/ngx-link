import { Component } from '@angular/core';
import { FsLinkDirective } from '../../../../src/app/directives/link.directive';

@Component({
    selector: 'new',
    templateUrl: 'new.component.html',
    standalone: true,
    imports: [FsLinkDirective]
})
export class NewComponent {

  public url = 'google.com';
}
