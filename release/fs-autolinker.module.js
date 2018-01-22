"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fs_autolinker_directive_1 = require("./fs-autolinker.directive");
var FsAutolinkerModule = /** @class */ (function () {
    function FsAutolinkerModule() {
    }
    FsAutolinkerModule_1 = FsAutolinkerModule;
    FsAutolinkerModule.forRoot = function () {
        return {
            ngModule: FsAutolinkerModule_1,
            providers: []
        };
    };
    FsAutolinkerModule = FsAutolinkerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                // Angular
                common_1.CommonModule,
            ],
            exports: [
                fs_autolinker_directive_1.FsAutolinkerDirective
            ],
            entryComponents: [],
            declarations: [
                fs_autolinker_directive_1.FsAutolinkerDirective
            ],
            providers: [],
        })
    ], FsAutolinkerModule);
    return FsAutolinkerModule;
    var FsAutolinkerModule_1;
}());
exports.FsAutolinkerModule = FsAutolinkerModule;
//# sourceMappingURL=fs-autolinker.module.js.map