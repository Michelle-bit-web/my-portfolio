"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectListDataService = void 0;
var core_1 = require("@angular/core");
var ProjectListDataService = /** @class */ (function () {
    function ProjectListDataService() {
        this.projectList = [
            {
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
                        img: "assets/img/09-Icons/4.png"
                    },
                    {
                        name: "SCSS",
                        img: "assets/img/09-Icons/6.png"
                    },
                    {
                        name: "TypeScript",
                        img: "assets/img/09-Icons/2.png"
                    },
                    {
                        name: "Firebase",
                        img: "assets/img/09-Icons/8.png"
                    },
                    {
                        name: "Material Design",
                        img: "assets/img/09-Icons/15.png"
                    }
                ],
                "live-link": "https://join.michelle-puschkarow.de/",
                "github-link": "https://github.com/Michelle-bit-web/join"
            },
            {
                title: "El Pollo Loco",
                imgResponsive: "assets/img/04-Projects/project-preview/pollo-loco-resp.png",
                imgResponsiveMobile: "assets/img/04-Projects/project-preview/mobile/pollo-loco-resp.png",
                img: "assets/img/04-Projects/project-preview/pollo-loco.png",
                imgMobile: "assets/img/04-Projects/project-preview/mobile/pollo-loco.png",
                description: "project-card.el-pollo-loco.description",
                details: "project-card.el-pollo-loco.details",
                languages: [
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/4.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/5.png"
                    },
                    {
                        name: "JavaScript",
                        img: "assets/img/09-Icons/3.png"
                    },
                ],
                "live-link": "https://el-pollo-loco.michelle-puschkarow.de/",
                "github-link": "https://github.com/Michelle-bit-web/el-pollo-loco"
            },
            {
                title: "Pokédex",
                imgResponsive: "assets/img/04-Projects/project-preview/pokedex-resp.png",
                imgResponsiveMobile: "assets/img/04-Projects/project-preview/mobile/pokedex-resp.png",
                img: "assets/img/04-Projects/project-preview/pokedex-desktop.png",
                imgMobile: "assets/img/04-Projects/project-preview/mobile/pokedex-desktop.png",
                description: "project-card.pokedex.description",
                details: "project-card.pokedex.details",
                languages: [
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/4.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/5.png"
                    },
                    {
                        name: "JavaScript",
                        img: "assets/img/09-Icons/3.png"
                    },
                    {
                        name: "API",
                        img: "assets/img/09-Icons/7.png"
                    }
                ],
                "live-link": "http://pokedex.michelle-puschkarow.de/",
                "github-link": "https://github.com/Michelle-bit-web/pokedex"
            },
            {
                title: "Bestell App",
                imgResponsive: "assets/img/04-Projects/project-preview/bestell-app-resp.png",
                imgResponsiveMobile: "assets/img/04-Projects/project-preview/mobile/bestell-app-resp.png",
                img: "assets/img/04-Projects/project-preview/bestellapp-desktop.png",
                imgMobile: "assets/img/04-Projects/project-preview/mobile/bestellapp-desktop.png",
                description: "project-card.bestell-app.description",
                details: "project-card.bestell-app.details",
                languages: [
                    {
                        name: "React",
                        img: "assets/img/09-Icons/21.png"
                    },
                    {
                        name: "Django",
                        img: "assets/img/09-Icons/23.png"
                    },
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/4.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/5.png"
                    },
                    {
                        name: "TypeScript",
                        img: "assets/img/09-Icons/2.png"
                    },
                ],
                "live-link": "http://bestellapp.michelle-puschkarow.de/",
                "github-link": "https://github.com/Michelle-bit-web/bestellApp"
            }
        ];
    }
    ProjectListDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectListDataService);
    return ProjectListDataService;
}());
exports.ProjectListDataService = ProjectListDataService;
