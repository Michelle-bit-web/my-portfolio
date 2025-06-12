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
                title: "DABubble",
                imgResponsive: "assets/img/04-Projects/project-preview/da-bubble-resp.png",
                img: "assets/img/04-Projects/project-preview/da-bubble.png",
                description: "project-card.dabubble.description",
                details: "project-card.dabubble.details",
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
                    }
                ],
                "live-link": "https://github.com/Michelle-bit-web",
                "github-link": "https://github.com/Michelle-bit-web"
            },
            {
                title: "Join",
                imgResponsive: "assets/img/04-Projects/project-preview/join-resp.png",
                img: "assets/img/04-Projects/project-preview/join.png",
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
                    }
                ],
                "live-link": "https://github.com/Michelle-bit-web",
                "github-link": "https://github.com/Michelle-bit-web"
            },
            {
                title: "El Pollo Loco",
                imgResponsive: "assets/img/04-Projects/project-preview/pollo-loco-resp.png",
                img: "assets/img/04-Projects/project-preview/pollo-loco.png",
                description: "project-card.el-pollo-loco.description",
                details: "project-card.el-pollo-loco.details",
                languages: [
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/2.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/3.png"
                    },
                    {
                        name: "JavaScript",
                        img: "assets/img/09-Icons/4.png"
                    },
                ],
                "live-link": "https://github.com/Michelle-bit-web",
                "github-link": "https://github.com/Michelle-bit-web"
            },
            {
                title: "Pokédex",
                imgResponsive: "assets/img/04-Projects/project-preview/pokedex-resp.png",
                img: "assets/img/04-Projects/project-preview/pokedex-desktop.png",
                description: "project-card.pokedex.description",
                details: "project-card.pokedex.details",
                languages: [
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/2.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/3.png"
                    },
                    {
                        name: "JavaScript",
                        img: "assets/img/09-Icons/4.png"
                    },
                ],
                "live-link": "https://michelle-bit-web.github.io/pokedex/",
                "github-link": "https://github.com/Michelle-bit-web/pokedex"
            },
            {
                title: "Bestell App",
                imgResponsive: "assets/img/04-Projects/project-preview/bestell-app-resp.png",
                img: "assets/img/04-Projects/project-preview/bestellapp-desktop.png",
                description: "project-card.bestell-app.description",
                details: "project-card.bestell-app.details",
                languages: [
                    {
                        name: "HTML",
                        img: "assets/img/09-Icons/2.png"
                    },
                    {
                        name: "CSS",
                        img: "assets/img/09-Icons/3.png"
                    },
                    {
                        name: "JavaScript",
                        img: "assets/img/09-Icons/4.png"
                    },
                ],
                "live-link": "https://michelle-bit-web.github.io/bestell-app/",
                "github-link": "https://github.com/Michelle-bit-web/bestell-app"
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
