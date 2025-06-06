import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListDataService } from '../../../types/project-list-data.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    TranslateModule,
    TranslatePipe,
    RouterModule,
    ProjectCardComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectListData = inject(ProjectListDataService);
}
