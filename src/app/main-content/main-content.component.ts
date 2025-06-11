import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  imports: [
    AboutMeComponent,
    ContactComponent,
    FeedbackComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    TranslateModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {}
