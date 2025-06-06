import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [
    RouterModule,
    TranslateModule,
    TranslatePipe
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = 
  {
    title: "Join",
    img:"assets/img/04-Projects/project-preview/Property 1=Default.png",
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