"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var footer_component_1 = require("./footer/footer.component");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.http = core_1.inject(http_1.HttpClient);
        this.isTouchDevice = false;
        this.contactData = {
            name: '',
            email: '',
            message: '',
            checkedStatus: false
        };
        this.mailTest = false; //auf false, um Live senden zu können
        this.mailSend = false;
        this.post = {
            endPoint: 'https://michelle-puschkarow.de/sendMail.php',
            body: function (payload) { return JSON.stringify(payload); },
            options: {
                headers: {
                    'Content-Type': 'text/plain',
                    responseType: 'text'
                }
            }
        };
    }
    ContactComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
            this.http.post(this.post.endPoint, this.post.body(this.contactData), {
                headers: { 'Content-Type': 'text/plain' },
                responseType: 'text' // wichtig: explizit casten
            })
                .subscribe({
                next: function (response) {
                    _this.showSendingResponse();
                    ngForm.resetForm();
                },
                error: function (error) {
                    console.error(error);
                }
            });
        }
        else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
            ngForm.resetForm();
        }
    };
    ContactComponent.prototype.showSendingResponse = function () {
        var _this = this;
        this.mailSend = true;
        setTimeout(function () {
            _this.mailSend = false;
        }, 3000);
    };
    ContactComponent.prototype.toggleCheck = function () {
        if (!this.contactData.checkedStatus) {
            this.contactData.checkedStatus = true;
        }
        else {
            this.contactData.checkedStatus = false;
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
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
    ], ContactComponent.prototype, "touchIcons");
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            imports: [
                footer_component_1.FooterComponent,
                core_2.TranslateModule,
                core_2.TranslatePipe,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                router_1.RouterModule
            ],
            templateUrl: './contact.component.html',
            styleUrl: './contact.component.scss'
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
