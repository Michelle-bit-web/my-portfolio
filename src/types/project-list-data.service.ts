import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListDataService {

  constructor() { }

    projectList = [
    {
      title: "Join",
      img:"assets/img/04-Projects/project-preview/Property 1=Default.png",
      description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
    },
    {
      title: "El Pollo Loco",
      img:"assets/img/04-Projects/project-preview/Property 1=El Pollo Loco.png",
      description: "Jump `N Run game based on object-oriented approach. Help Pepe el Peligroso to fight agains the crazy hen with tabasco salsa.",
    },
    {
      title: "DABubble",
      img:"assets/img/04-Projects/project-preview/Property 1=Join.png",
      description: "This App is a Slack clone App. It revolutionized team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
    },
    ]
}