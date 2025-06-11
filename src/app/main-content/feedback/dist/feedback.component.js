"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedbackComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var card_component_1 = require("./card/card.component");
var common_1 = require("@angular/common");
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
        this.isTouchDevice = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
    };
    FeedbackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add('load');
                }
                else {
                    el.classList.remove('load');
                }
            });
        }, {
            threshold: 0.2
        });
        this.touchIcons.forEach(function (el) {
            _this.observer.observe(el.nativeElement);
        });
    };
    __decorate([
        core_1.ViewChildren('loadIcon')
    ], FeedbackComponent.prototype, "touchIcons");
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: 'app-feedback',
            imports: [
                core_2.TranslateModule,
                core_2.TranslatePipe,
                card_component_1.CardComponent,
                common_1.CommonModule
            ],
            templateUrl: './feedback.component.html',
            styleUrl: './feedback.component.scss'
        })
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
