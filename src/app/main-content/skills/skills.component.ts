import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [
    TranslateModule,
    TranslatePipe,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit{
  @ViewChildren('touchIcon') touchIcons!: QueryList<ElementRef>;
  isTouchDevice:boolean = false;
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
 }

  ngAfterViewInit() {
      if (!this.isTouchDevice) return;
      this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('touch');
        } else {
          el.classList.remove('touch');
        }
      });
    }, {
      threshold: 0.2 // 20% sichtbar reicht
    });
    // Alle Elemente beobachten
    this.touchIcons.forEach((el: ElementRef) => {
      this.observer.observe(el.nativeElement);
    });
    }

  iconList = [
    {
      name: "Angular",
      img: "1"
    },
    {
      name: "HTML",
      img: "2"
    },
    {
      name: "CSS",
      img: "3"
    },
    {
      name: "JavaScript",
      img: "4"
    },
    {
      name: "Git",
      img: "5"
    },
    {
      name: "GitHub",
      img: "6"
    },
    {
      name: "TypeScript",
      img: "7"
    },
    {
      name: "SCSS",
      img: "8"
    },
    {
      name: "VS Code",
      img: "9"
    },
    {
      name: "Firebase",
      img: "10"
    },
    {
      name: "Material Design",
      img: "11"
    },
    {
      name: "Bootsrap",
      img: "12"
    },
    {
      name: "Procreate",
      img: "13"
    },
    {
      name: "Photoshop",
      img: "14"
    },
    {
      name: "Gimp",
      img: "15"
    },
  ]
}
