import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListDataService {

  constructor() { }

  projectList = [
    {
      title: "DABubble",
      img: "assets/img/04-Projects/project-preview/Property 1=DABubble.png",
      description: "project-card.dabubble.description",
      details: "project-card.dabubble.details",
      languages: [
        {
          name: "Angular",
          img: "assets/img/03-Skills/icons/1.png"
        },
        {
          name: "HTML",
          img: "assets/img/03-Skills/icons/2.png"
        },
        {
          name: "CSS",
          img: "assets/img/03-Skills/icons/3.png"
        },
      ],
      link: "https://github.com/Michelle-bit-web"
    },
    {
      title: "Join",
      img: "assets/img/04-Projects/project-preview/Property 1=Join.png",
      description: "project-card.join.description",
      details: "project-card.join.details",
      languages: [
        {
          name: "Angular",
          img: "assets/img/03-Skills/icons/1.png"
        },
        {
          name: "HTML",
          img: "assets/img/03-Skills/icons/2.png"
        },
        {
          name: "CSS",
          img: "assets/img/03-Skills/icons/3.png"
        },
      ],
      link: "https://github.com/Michelle-bit-web"
    },
    {
      title: "El Pollo Loco",
      img: "assets/img/04-Projects/project-preview/Property 1=El Pollo Loco.png",
      description: "project-card.el-pollo-loco.description",
      details: "project-card.el-pollo-loco.details",
      languages: [
        {
          name: "Angular",
          img: "assets/img/03-Skills/icons/1.png"
        },
        {
          name: "HTML",
          img: "assets/img/03-Skills/icons/2.png"
        },
        {
          name: "CSS",
          img: "assets/img/03-Skills/icons/3.png"
        },
      ],
      link: "https://github.com/Michelle-bit-web"
    }
  ]
}