import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateModule, TranslatePipe} from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-hero',
  imports: [
    HeaderComponent,
    TranslateModule,
    TranslatePipe

  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('name', { static: true }) refName!: ElementRef<HTMLDivElement>;
  @ViewChild('btnMobile', { static: true }) refBtn!: ElementRef<HTMLButtonElement>;
  

   ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    if (this.isTouchDevice()) {
      this.startButtonAnimationLoop();
    }
  }

  onMouseEnter(){
    this.refName.nativeElement.textContent = 'Michelle :D';
  }

  onMouseLeave(){
    this.refName.nativeElement.textContent = 'Michelle :)';
  }

  isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  startButtonAnimationLoop() {
    const btn = this.refBtn.nativeElement;
    const interval = 2000;

    setInterval(() => {
      btn.classList.add('animate');

      setTimeout(() => {
        btn.classList.remove('animate');
      }, 1000);
    }, interval);
  }

}
