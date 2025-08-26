import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule, TranslatePipe, LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
  @ViewChildren('load') loadElements!: QueryList<ElementRef>;
  isTouchDevice:boolean = false;
  private observer!: IntersectionObserver;
  private langSub!: Subscription;

  currentLangClass = '';

  constructor(private translate: TranslateService) {}  

  ngOnInit(): void {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
    this.setLangClass(this.translate.currentLang);
    this.langSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setLangClass(event.lang);
    });
  }

  ngAfterViewInit(): void {
    this.generalObserve();
    if (this.isTouchDevice) {
      this.touchObserve();
    }
  }

  setLangClass(lang: string): void {
    this.currentLangClass = `title-${lang}`;
  }

  generalObserve(){
    const generalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('load');
        } else {
          el.classList.remove('load');
        }
      });
    }, { threshold: 0.2 });
    this.loadElements.forEach(el => {
      generalObserver.observe(el.nativeElement);
    });
  }

  touchObserve(){
    const touchObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('touch');
          } else {
            el.classList.remove('touch');
          }
        });
      }, { threshold: 0.2 });
      this.touchIcons.forEach(el => {
        touchObserver.observe(el.nativeElement);
      });
  }

  iconList = [
    {
      name: "Angular",
      img: "1"
    },
    {
      name: "TypeScript",
      img: "2"
    },
    {
      name: "JavaScript",
      img: "3"
    },
    {
      name: "HTML",
      img: "4"
    },
    {
      name: "CSS",
      img: "5"
    },
    {
      name: "SCSS",
      img: "6"
    },
    {
      name: "API",
      img: "7"
    },
    {
      name: "Firebase",
      img: "8"
    },
    {
      name: "VS Code",
      img: "9"
    },
    {
      name: "WebStorm",
      img: "10"
    },
    {
      name: "Scrum",
      img: "11"
    },
    {
      name: "Git",
      img: "12"
    },
    {
      name: "GitHub",
      img: "13"
    },
    {
      name: "NPM",
      img: "14"
    },
    {
      name: "Material Design",
      img: "15"
    },
    {
      name: "Bootstrap",
      img: "16"
    },
    {
      name: "Procreate",
      img: "17"
    },
    {
      name: "Photoshop",
      img: "18"
    },
    {
      name: "Gimp",
      img: "19"
    },
    {
      name: "Figma",
      img: "20"
    },
  ]
}
