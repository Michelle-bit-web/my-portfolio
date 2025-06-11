"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var project_card_component_1 = require("./project-card/project-card.component");
var project_list_data_service_1 = require("../../../types/project-list-data.service");
var common_1 = require("@angular/common");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projectListData = core_1.inject(project_list_data_service_1.ProjectListDataService);
        this.isTouchDevice = false;
        this.project = {
            title: "Join",
            imgResponsive: "assets/img/04-Projects/project-preview/Property 1=Default.png",
            description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories."
        };
        this.index = 0;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.isTouchDevice = isTouch;
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        var _a;
        var observer = new IntersectionObserver(function (entries) {
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
        if ((_a = this.frameRef) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            observer.observe(this.frameRef.nativeElement);
        }
    };
    __decorate([
        core_1.ViewChild('load', { static: true })
    ], ProjectsComponent.prototype, "frameRef");
    __decorate([
        core_1.Input()
    ], ProjectsComponent.prototype, "project");
    __decorate([
        core_1.Input()
    ], ProjectsComponent.prototype, "index");
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            imports: [
                core_2.TranslateModule,
                core_2.TranslatePipe,
                router_1.RouterModule,
                project_card_component_1.ProjectCardComponent,
                common_1.CommonModule
            ],
            templateUrl: './projects.component.html',
            styleUrl: './projects.component.scss'
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
