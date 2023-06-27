import { Directive, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { Autolinker, AutolinkerConfig } from 'autolinker';


@Directive({
  selector: '[fsLink]',
})
export class FsLinkDirective implements AfterViewInit {

  private _autolinker = null;
  private _el: Element;

  @Input() httpPrefix = false;
  @Input() newWindow = false;
  @Input() openWindow = false;
  @Output() replaced = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {
    this._el = this.elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    if (this._el.tagName === 'A') {
      if (this.httpPrefix) {
        const href = this._el.attributes.getNamedItem('href');

        if (href && !href.value.match(/^http/i)) {
          href.value = 'http://' + href.value;
        }
      }

      this.bindOpenWindow(this._el);

    } else {
      this.linkify();
    }
  }

  private bindOpenWindow(el) {
    if (this.openWindow) {
      el.addEventListener('click', this.clickOpenWindow.bind(this, el));
    }
  }

  public clickOpenWindow(el, e) {

    const href = el.attributes.getNamedItem('href');

    if (href && !href.value.match(/^(mailto:|tel:|maps:)/i)) {

      e.preventDefault();

      // _system supports desktop as well as cordova
      if ((window as any).cordova && (window as any).cordova.InAppBrowser) {
        (window as any).cordova.InAppBrowser.open(href.value, '_system');
      } else {
        window.open(href.value, '_system');
      }

    }
  }

  public linkify() {
    const config: AutolinkerConfig = {
      urls: {
        schemeMatches: true,
        tldMatches: true
      },
      email: true,
      phone: true,
      mention: false,
      hashtag: false,
      stripPrefix: true,
      stripTrailingSlash : true,
      newWindow: this.newWindow,
      truncate: {
        length  : 0,
        location: 'end'
      },
      className: '',
      replaceFn: () => {
        this.replaced.emit();
      }
    };

    this._autolinker = new Autolinker(config);
    this._el.innerHTML = this._autolinker.link(this._el.innerHTML);

    if (this.openWindow) {

      this._el.querySelectorAll('a')
      .forEach(el => {
        this.bindOpenWindow(el);
      });
    }
  }
}
