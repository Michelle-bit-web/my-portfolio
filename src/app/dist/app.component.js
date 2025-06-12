"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var cursor_component_1 = require("./shared/cursor/cursor.component");
var core_2 = require("@ngx-translate/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.title = 'my-portfolio';
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function () {
            var fragment = _this.router.parseUrl(_this.router.url).fragment;
            if (fragment) {
                setTimeout(function () {
                    var el = document.getElementById(fragment);
                    el === null || el === void 0 ? void 0 : el.scrollIntoView({ behavior: 'smooth' });
                }, 0); // wartet auf DOM-Render
            }
        });
    }
    AppComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [
                router_1.RouterOutlet,
                cursor_component_1.CursorComponent,
                core_2.TranslateModule
            ],
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
