import { Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html',
  styleUrls: [ 'first-example.component.css' ]
})
export class FirstExampleComponent {

  content = '';

  constructor() {
    this.facebook();
  }

  facebook() {
    this.content = `Quisque non ante metus. Nunc non massa at someone@facebook.com purus aliquet porttitor eu a libero.
                    Maecenas malesuada augue et cursus interdum. Nulla in maximus est. Pellentesque egestas aliquam
                    fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Etiam in nisl ligula. Nulla convallis risus euismod ultrices eleifend. Nulla
                    et orci lorem. Cras non risus in est mollis congue. Cras nec nisl eu metus vulputate
                    facebook.com lacinia et eu justo. In nisi sapien, malesuada eu volutpat eu, efficitur id risus.
                    Ut et facebook.com  risus 416-555-5555 bibendum, tempus mi nec, gravida justo.`
  }
  google() {
    this.content = `Donec id libero et sapien auctor egestas. Praesent in justo erat. Vivamus at sapien nibh.
                    Sed dictum sem ac viverra tempus. Cras blandit google.com tempus purus eu suscipit. Ut gravida quis
                    augue in vulputate. Suspendisse tristique eu ex id vulputate. Donec dignissim, diam vel venenatis
                    sollicitudin, enim erat imperdiet odio, in google.com convallis sapien metus vitae lacus. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur tempus
                    orci sollicitudin someone@google.com leo porta dapibus. Nulla sodales, odio in sodales bibendum,
                    ex dui aliquam magna, eget laoreet ex dui in sem. Etiam tristique;`
  }

  replace(data) {
    console.log('replaced', data);
  }
}
