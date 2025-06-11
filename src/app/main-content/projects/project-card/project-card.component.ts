import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
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
export class ProjectCardComponent implements  AfterViewInit{
    @ViewChild('frameRef', { static: true }) frameRef!: ElementRef;
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
    if (!this.isTouchDevice) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('touch-visible');
        } else {
          el.classList.remove('touch-visible');
        }
      });
    }, { threshold: 0.2 });
    if (this.frameRef?.nativeElement) {
      observer.observe(this.frameRef.nativeElement);
    }
  }
  
  getIndex(i: number){
    console.log ('Das Bild mit dem Index:' + i + ' wurde geklickt');
    this.index = i;
    console.log (this.index)
  }
}