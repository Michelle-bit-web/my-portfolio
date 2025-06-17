"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroComponent = void 0;
var core_1 = require("@angular/core");
var header_component_1 = require("../../shared/header/header.component");
var core_2 = require("@ngx-translate/core");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var common_1 = require("@angular/common");
var init_1 = require("@angular/localize/init");
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.isTouchDevice = false;
        this.isHome = true;
        this.nameLocalized = '';
    }
    HeroComponent.prototype.ngOnInit = function () {
        aos_1["default"].init();
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
        this.nameLocalized = init_1.$localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":@@hero.name:I\u00B4m Michelle"], [":@@hero.name:I\u00B4m Michelle"])));
    };
    HeroComponent.prototype.onMouseEnter = function () {
        this.refName.nativeElement.textContent = 'Michelle :D';
    };
    HeroComponent.prototype.onMouseLeave = function () {
        this.refName.nativeElement.textContent = 'Michelle :)';
    };
    __decorate([
        core_1.ViewChild('name', { static: true })
    ], HeroComponent.prototype, "refName");
    __decorate([
        core_1.ViewChild('btnMobile', { static: true })
    ], HeroComponent.prototype, "refBtn");
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'app-hero',
            imports: [
                header_component_1.HeaderComponent,
                core_2.TranslateModule,
                core_2.TranslatePipe,
                common_1.CommonModule
            ],
            templateUrl: './hero.component.html',
            styleUrl: './hero.component.scss'
        })
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
var templateObject_1;
