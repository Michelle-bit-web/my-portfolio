import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [
    RouterModule,
    TranslateModule,
    TranslatePipe,
    CommonModule
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  isTouchDevice:boolean = false;

  gOnInit() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
  }
  
  @Input() project = 
  {
    title: "Join",
    imgResponsive:"assets/img/04-Projects/project-preview/Property 1=Default.png",
    description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
  }
  @Input() index = 0;

  ngOnInit(){
      console.log (this.index)
  }
  
  getIndex(i: number){
    console.log ('Das Bild mit dem Index:' + i + ' wurde geklickt');
    this.index = i;
    console.log (this.index)
  }
}