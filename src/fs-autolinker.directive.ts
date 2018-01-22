import { Directive, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as Autolinker from 'autolinker';

@Directive({
  selector: '[fsAutolinker]'
})
export class FsAutolinkerDirective implements OnInit {

  content = null;
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

  @Input() fsAutolinkerConfig = {};
  @Output() fsAutolinkerOnReplace = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    this.fsAutolinkerConfig = Object.assign({}, this.defaultConfig, this.fsAutolinkerConfig);

    this.fsAutolinkerConfig['replaceFn'] = match => {
      this.fsAutolinkerOnReplace.emit(match);
    }

    this.content = this.elementRef.nativeElement.innerHTML;
    this.autolinker = new Autolinker(this.fsAutolinkerConfig);
    this.elementRef.nativeElement.innerHTML = this.autolinker.link(this.content);
  }

}
