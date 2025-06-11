"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SkillsComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(translate) {
        this.translate = translate;
        this.isTouchDevice = false;
        this.currentLangClass = '';
        this.iconList = [
            {
                name: "Angular",
                img: "1"
            },
            {
                name: "HTML",
                img: "2"
            },
            {
                name: "CSS",
                img: "3"
            },
            {
                name: "JavaScript",
                img: "4"
            },
            {
                name: "Git",
                img: "5"
            },
            {
                name: "GitHub",
                img: "6"
            },
            {
                name: "TypeScript",
                img: "7"
            },
            {
                name: "SCSS",
                img: "8"
            },
            {
                name: "VS Code",
                img: "9"
            },
            {
                name: "Firebase",
                img: "10"
            },
            {
                name: "Material Design",
                img: "11"
            },
            {
                name: "Bootsrap",
                img: "12"
            },
            {
                name: "Procreate",
                img: "13"
            },
            {
                name: "Photoshop",
                img: "14"
            },
            {
                name: "Gimp",
                img: "15"
            },
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
        this.setLangClass(this.translate.currentLang);
        this.langSub = this.translate.onLangChange.subscribe(function (event) {
            _this.setLangClass(event.lang);
        });
    };
    SkillsComponent.prototype.ngAfterViewInit = function () {
        this.generalObserve();
        if (this.isTouchDevice) {
            this.touchObserve();
        }
    };
    SkillsComponent.prototype.setLangClass = function (lang) {
        this.currentLangClass = "title-" + lang;
    };
    SkillsComponent.prototype.generalObserve = function () {
        var generalObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add('load');
                }
                else {
                    el.classList.remove('load');
                }
            });
        }, { threshold: 0.2 });
        this.loadElements.forEach(function (el) {
            generalObserver.observe(el.nativeElement);
        });
    };
    SkillsComponent.prototype.touchObserve = function () {
        var touchObserver = new IntersectionObserver(function (entries) {
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
        this.touchIcons.forEach(function (el) {
            touchObserver.observe(el.nativeElement);
        });
    };
    __decorate([
        core_1.ViewChildren('touchIcon')
    ], SkillsComponent.prototype, "touchIcons");
    __decorate([
        core_1.ViewChildren('load')
    ], SkillsComponent.prototype, "loadElements");
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'app-skills',
            imports: [
                core_2.TranslateModule,
                core_2.TranslatePipe,
                common_1.CommonModule
            ],
            templateUrl: './skills.component.html',
            styleUrl: './skills.component.scss'
        })
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
