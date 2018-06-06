import { Directive, ElementRef, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import * as Autolinker from 'autolinker';

@Directive({
  selector: '[fsLink]'
})
export class FsLinkDirective implements OnChanges {

  public autolinker = null;

  @Input() fsLink = null;
  @Input() newWindow = false;
  @Output() replace = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.link();
  }

  link() {

    const config = {
      urls : {
          schemeMatches : true,
          wwwMatches    : true,
          tldMatches    : true
      },
      email       : true,
      phone       : true,
      mention     : false,
      hashtag     : false,
      stripPrefix : true,
      stripTrailingSlash : true,
      newWindow   : this.newWindow,
      truncate : {
          length   : 0,
          location : 'end'
      },
      className : ''
    }

    if (!this.fsLink) {
      this.elementRef.nativeElement.innerHTML = '';
      return;
    }

    this.autolinker = new Autolinker(config);
    this.elementRef.nativeElement.innerHTML = this.autolinker.link(this.fsLink);
    config['replaceFn'] = match => {
      this.replace.emit(match);
    }
  }

}
