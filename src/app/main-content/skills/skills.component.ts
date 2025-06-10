import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
export class SkillsComponent {
   @ViewChildren('touchIcon') touchIcons!: QueryList<ElementRef>;
  isTouchDevice:boolean = false;

  ngOnInit(): void {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  this.isTouchDevice = isTouch;
}

ngAfterViewInit() {
    if (this.isTouchDevice) {
      this.restartAnimationLoop();
    }
  }

  restartAnimationLoop() {
    this.touchIcons.forEach((iconEl: ElementRef) => {
      const nativeEl = iconEl.nativeElement;
      nativeEl.classList.remove('touch');
      setTimeout(() => {
        nativeEl.classList.add('touch');
      }, 3000)
      // Restart animation every 3s
      // const loop = () => {
      //   nativeEl.classList.remove('touch');
      //   void nativeEl.offsetWidth; // <- trigger reflow
      //   nativeEl.classList.add('touch');
      //   setTimeout(loop, 3000);
      // };
      // setTimeout(loop, 0);
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
