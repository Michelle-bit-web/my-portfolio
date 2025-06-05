import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
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
  project = 
  {
    title: "Join",
    img:"assets/img/04-Projects/project-preview/Property 1=Default.png",
    description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projectListData.projectList[id];
  }
}
