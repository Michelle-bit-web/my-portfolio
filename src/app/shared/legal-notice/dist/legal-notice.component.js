"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LegalNoticeComponent = void 0;
var core_1 = require("@angular/core");
var footer_component_1 = require("../../main-content/contact/footer/footer.component");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var header_component_1 = require("../header/header.component");
var LegalNoticeComponent = /** @class */ (function () {
    function LegalNoticeComponent() {
    }
    LegalNoticeComponent = __decorate([
        core_1.Component({
            selector: 'app-legal-notice',
            imports: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                router_1.RouterModule,
                router_1.RouterLink,
                core_2.TranslateModule,
                core_2.TranslatePipe
            ],
            templateUrl: './legal-notice.component.html',
            styleUrl: './legal-notice.component.scss'
        })
    ], LegalNoticeComponent);
    return LegalNoticeComponent;
}());
exports.LegalNoticeComponent = LegalNoticeComponent;
