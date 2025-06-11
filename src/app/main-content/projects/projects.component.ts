import { Component, ElementRef, Input, AfterViewInit, ViewChild, inject } from '@angular/core';
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
export class ProjectsComponent implements  AfterViewInit{
  projectListData = inject(ProjectListDataService);
   @ViewChild('load', { static: true }) frameRef!: ElementRef;
    isTouchDevice:boolean = false;
    @Input() project = 
    {
      title: "Join",
      imgResponsive:"assets/img/04-Projects/project-preview/Property 1=Default.png",
      description: "Task manager inspired by the Kanban system. Create an organize tasks using drag and drop functions, assign users and categories.",
    }
    @Input() index = 0;

  ngOnInit() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('load');
        } else {
          el.classList.remove('load');
        }
      });
    }, { threshold: 0.2 });
    if (this.frameRef?.nativeElement) {
      observer.observe(this.frameRef.nativeElement);
    }
  }
}

