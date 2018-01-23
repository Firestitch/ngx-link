import { Directive, ElementRef, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import * as Autolinker from 'autolinker';

@Directive({
  selector: '[fsLinker]'
})
export class FsLinkerDirective implements OnChanges {

  autolinker = null;
  defaultConfig = {
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
    newWindow   : true,
    truncate : {
        length   : 0,
        location : 'end'
    },
    className : ''
  }

  @Input() fsLinker = null;
  @Input() fsLinkerConfig = {};
  @Output() fsLinkerOnReplace = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.link();
  }

  link() {
    if (!this.fsLinker) {
      this.elementRef.nativeElement.innerHTML = '';
      return;
    }

    this.fsLinkerConfig = Object.assign({}, this.defaultConfig, this.fsLinkerConfig);
    this.autolinker = new Autolinker(this.fsLinkerConfig);
    this.elementRef.nativeElement.innerHTML = this.autolinker.link(this.fsLinker);
    this.fsLinkerConfig['replaceFn'] = match => {
      this.fsLinkerOnReplace.emit(match);
    }
  }

}
