import { Directive, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as Autolinker from 'autolinker';

@Directive({
  selector: '[fsLinker]'
})
export class FsLinkerDirective implements OnInit {

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

  @Input() fsLinkerConfig = {};
  @Output() fsLinkerOnReplace = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    this.fsLinkerConfig = Object.assign({}, this.defaultConfig, this.fsLinkerConfig);

    this.fsLinkerConfig['replaceFn'] = match => {
      this.fsLinkerOnReplace.emit(match);
    }

    this.content = this.elementRef.nativeElement.innerHTML;
    this.autolinker = new Autolinker(this.fsLinkerConfig);
    this.elementRef.nativeElement.innerHTML = this.autolinker.link(this.content);
  }

}
