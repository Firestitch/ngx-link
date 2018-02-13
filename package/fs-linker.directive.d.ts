import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
export declare class FsLinkerDirective implements OnChanges {
    private elementRef;
    autolinker: any;
    defaultConfig: {
        urls: {
            schemeMatches: boolean;
            wwwMatches: boolean;
            tldMatches: boolean;
        };
        email: boolean;
        phone: boolean;
        mention: boolean;
        hashtag: boolean;
        stripPrefix: boolean;
        stripTrailingSlash: boolean;
        newWindow: boolean;
        truncate: {
            length: number;
            location: string;
        };
        className: string;
    };
    fsLinker: any;
    fsLinkerConfig: {};
    fsLinkerOnReplace: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    link(): void;
}
