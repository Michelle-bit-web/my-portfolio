"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutMeComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.isTouchDevice = false;
        this.project = {
            title: "Join",
            imgResponsive: "assets/img/04-Projects/project-preview/Property 1=Default.png",
            description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories."
        };
        this.index = 0;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
    };
    AboutMeComponent.prototype.ngAfterViewInit = function () {
        var _a;
        if (!this.isTouchDevice)
            return;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add('touch');
                }
                else {
                    el.classList.remove('touch');
                }
            });
        }, { threshold: 0.2 });
        if ((_a = this.frameRef) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            observer.observe(this.frameRef.nativeElement);
        }
    };
    __decorate([
        core_1.ViewChild('touch', { static: true })
    ], AboutMeComponent.prototype, "frameRef");
    __decorate([
        core_1.Input()
    ], AboutMeComponent.prototype, "project");
    __decorate([
        core_1.Input()
    ], AboutMeComponent.prototype, "index");
    AboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me',
            imports: [
                core_2.TranslateModule,
                core_2.TranslatePipe,
                common_1.CommonModule
            ],
            templateUrl: './about-me.component.html',
            styleUrl: './about-me.component.scss'
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;
