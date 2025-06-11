import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [
    TranslateModule,
    TranslatePipe,
    CardComponent,
    CommonModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
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
      threshold: 0.2
    });
    this.touchIcons.forEach((el: ElementRef) => {
      this.observer.observe(el.nativeElement);
    });
    }
}
