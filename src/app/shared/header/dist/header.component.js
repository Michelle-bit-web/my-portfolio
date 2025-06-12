"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.variant = "default";
        this.activeMenu = false;
        this.language = "en";
        this.isMobileView = false;
        this.isHome = false;
        this.language = this.translate.currentLang || 'en';
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function (event) {
            _this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
        });
    }
    HeaderComponent.prototype.onResize = function () {
        this.isMobileView = window.innerWidth <= 650;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    HeaderComponent.prototype.switchLanguage = function (current) {
        if (this.language === current)
            return;
        this.language = current;
        this.translate.use(current);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        var overlay = document.querySelector('.overlay');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('d_none');
        var button = document.querySelector(".menu-btn");
        var isOpened = button === null || button === void 0 ? void 0 : button.getAttribute("aria-expanded");
        if (isOpened === "false") {
            button === null || button === void 0 ? void 0 : button.setAttribute("aria-expanded", "true");
        }
        else {
            button === null || button === void 0 ? void 0 : button.setAttribute("aria-expanded", "false");
        }
        if (this.activeMenu) {
            this.activeMenu = false;
        }
        else {
            this.activeMenu = true;
        }
    };
    __decorate([
        core_1.Input()
    ], HeaderComponent.prototype, "variant");
    __decorate([
        core_1.HostListener('window:resize', [])
    ], HeaderComponent.prototype, "onResize");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule,
                core_2.TranslatePipe,
                common_1.CommonModule,
                router_1.RouterModule
            ],
            templateUrl: './header.component.html',
            styleUrl: './header.component.scss'
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
