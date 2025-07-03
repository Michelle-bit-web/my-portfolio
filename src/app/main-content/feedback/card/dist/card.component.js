"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.list = [
            {
                firstName: "Anne",
                lastName: "Dalchow",
                profession: "Frontend Developer",
                profileLink: "https://www.linkedin.com/in/anne-dalchow/",
                feedback: "feedback.description-one"
            },
            {
                firstName: "Marco",
                lastName: "Palummieri",
                profession: "Frontend Developer",
                profileLink: "https://www.linkedin.com/in/marco-palummieri/",
                feedback: "feedback.description-two"
            },
            {
                firstName: "Viktor",
                lastName: "Naumann",
                profession: "Frontend Developer",
                profileLink: "https://www.linkedin.com/in/viktor-naumann/",
                feedback: "feedback.description-three"
            }
        ];
    }
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule,
                core_2.TranslatePipe
            ],
            templateUrl: './card.component.html',
            styleUrl: './card.component.scss'
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
