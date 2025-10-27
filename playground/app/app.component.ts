import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { BasicComponent } from './components/basic/basic.component';
import { NewComponent } from './components/new/new.component';
import { FirstExampleComponent } from './components/first-example/first-example.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, BasicComponent, NewComponent, FirstExampleComponent]
})
export class AppComponent {
  public config = environment;
}
