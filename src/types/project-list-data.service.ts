import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListDataService {

  constructor() { }

  projectList = [
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
      "github-link": "https://github.com/Michelle-bit-web"
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
      "github-link": "https://github.com/Michelle-bit-web"
    }
  ]
}