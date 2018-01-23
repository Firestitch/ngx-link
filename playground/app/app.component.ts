import { Component } from '@angular/core';

@Component({
  selector: 'fs-app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ '../styles/styles.scss' ]
})
export class AppComponent {

  content = 'http://google.com';

  constructor() {
  }

  replace(data) {
    console.log('replaced', data);
  }

}
