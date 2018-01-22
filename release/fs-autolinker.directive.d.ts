import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class FsAutolinkerDirective implements OnInit {
    private elementRef;
    content: any;
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
    fsAutolinkerConfig: {};
    fsAutolinkerOnReplace: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
