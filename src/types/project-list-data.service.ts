import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListDataService {

  constructor() { }

  projectList = [
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
        },
        {
          name: "Material Design",
          img: "assets/img/09-Icons/11.png"
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
      imgResponsiveMobile: "assets/img/04-Projects/project-preview/mobile/pokedex-resp.png",
      img: "assets/img/04-Projects/project-preview/pokedex-desktop.png",
      imgMobile: "assets/img/04-Projects/project-preview/mobile/pokedex-desktop.png",
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
      "live-link": "http://pokedex.michelle-puschkarow.de/",
      "github-link": "https://github.com/Michelle-bit-web/pokedex"
    }
  ]
}