import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ProjectListDataService } from '../../../../types/project-list-data.service';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-preview',
  imports: [
    HeaderComponent,
    CommonModule,
    TranslateModule,
    RouterModule,
    // SingleProjectComponent
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  projectListData = inject(ProjectListDataService);
}
