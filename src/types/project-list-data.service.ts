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
      description: "This App is a Slack clone App. It revolutionized team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      details: "Short text about my role or the workflow for this project (to show knowledge, independent work or collaboratively)",
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
      description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
      details: "Short text about my role or the workflow for this project (to show knowledge, independent work or collaboratively)",
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
      description: "Jump `N Run game based on object-oriented approach. Help Pepe el Peligroso to fight agains the crazy hen with tabasco salsa.",
      details: "Short text about my role or the workflow for this project (to show knowledge, independent work or collaboratively)",
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