import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProjectListDataService } from '../../../../types/project-list-data.service';

@Component({
  selector: 'app-preview',
  imports: [
    HeaderComponent,
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  projectListData = inject(ProjectListDataService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  
  project = 
  {
      title: "Join",
      imgResponsive: "assets/img/04-Projects/project-preview/Property 1=DABubble.png",
      img:"assets/img/04-Projects/project-preview/Property 1=Default.png",
      description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
      details: "Short text about my role or the workflow for this project (to show knowledge, independent work or collaboratively)",
      languages: [
        {name: "Angular",
         img: "assets/img/03-Skills/icons/1.png" 
        },
        {name: "HTML",
         img: "assets/img/03-Skills/icons/2.png" 
        },
        {name: "CSS",
         img: "assets/img/03-Skills/icons/3.png" 
        },
      ],
      "live-link": "https://github.com/Michelle-bit-web",
      "github-link": "https://github.com/Michelle-bit-web"
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const id = +params.get('id')!;
    this.project = this.projectListData.projectList[id];
  });
  }

  nextProject(){
    let id = +this.route.snapshot.paramMap.get('id')!;
    let nextId = id + 1;
    if (nextId >= this.projectListData.projectList.length) {
      nextId = 0;
    }
    this.router.navigate(['/preview', nextId]);
    console.log('das ist die id: ' + nextId)
  }
}