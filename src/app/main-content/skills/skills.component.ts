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
