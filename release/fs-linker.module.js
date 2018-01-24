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
var fs_linker_directive_1 = require("./fs-linker.directive");
var FsLinkerModule = /** @class */ (function () {
    function FsLinkerModule() {
    }
    FsLinkerModule_1 = FsLinkerModule;
    FsLinkerModule.forRoot = function () {
        return {
            ngModule: FsLinkerModule_1,
            providers: []
        };
    };
    FsLinkerModule = FsLinkerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                // Angular
                common_1.CommonModule,
            ],
            exports: [
                fs_linker_directive_1.FsLinkerDirective
            ],
            entryComponents: [],
            declarations: [
                fs_linker_directive_1.FsLinkerDirective
            ],
            providers: [],
        })
    ], FsLinkerModule);
    return FsLinkerModule;
    var FsLinkerModule_1;
}());
exports.FsLinkerModule = FsLinkerModule;
//# sourceMappingURL=fs-linker.module.js.map