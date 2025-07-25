"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PreviewComponent = void 0;
var core_1 = require("@angular/core");
var header_component_1 = require("../../../shared/header/header.component");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var router_1 = require("@angular/router");
var project_list_data_service_1 = require("../../../../types/project-list-data.service");
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
        this.projectListData = core_1.inject(project_list_data_service_1.ProjectListDataService);
        this.route = core_1.inject(router_1.ActivatedRoute);
        this.router = core_1.inject(router_1.Router);
        this.isMobileView = false;
        this.project = {
            title: "Join",
            imgResponsive: "assets/img/04-Projects/project-preview/join-resp.png",
            imgResponsiveMobile: "assets/img/04-Projects/project-preview/mobile/join-resp.png",
            img: "assets/img/04-Projects/project-preview/join.png",
            imgMobile: "assets/img/04-Projects/project-preview/mobile/join.png",
            description: "project-card.join.description",
            details: "project-card.join.details",
            languages: [
                {
                    name: "Angular",
                    img: "assets/img/09-Icons/1.png"
                },
                {
                    name: "HTML",
                    img: "assets/img/09-Icons/2.png"
                },
                {
                    name: "SCSS",
                    img: "assets/img/09-Icons/8.png"
                },
                {
                    name: "TypeScript",
                    img: "assets/img/09-Icons/7.png"
                },
                {
                    name: "Firebase",
                    img: "assets/img/09-Icons/10.png"
                }
            ],
            "live-link": "https://github.com/Michelle-bit-web/join",
            "github-link": "https://github.com/Michelle-bit-web/join"
        };
    }
    PreviewComponent.prototype.onResize = function () {
        this.isMobileView = window.innerWidth <= 650;
    };
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.project = _this.projectListData.projectList[id];
        });
        this.onResize();
    };
    PreviewComponent.prototype.nextProject = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        var nextId = id + 1;
        if (nextId >= this.projectListData.projectList.length) {
            nextId = 0;
        }
        this.router.navigate(['/preview', nextId]);
    };
    __decorate([
        core_1.HostListener('window:resize', [])
    ], PreviewComponent.prototype, "onResize");
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-preview',
            imports: [
                header_component_1.HeaderComponent,
                common_1.CommonModule,
                core_2.TranslateModule,
                router_1.RouterModule,
            ],
            templateUrl: './preview.component.html',
            styleUrl: './preview.component.scss'
        })
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
