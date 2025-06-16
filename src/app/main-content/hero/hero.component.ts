import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateModule, TranslatePipe} from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CommonModule } from '@angular/common';
import { $localize } from '@angular/localize/init';


@Component({
  selector: 'app-hero',
  imports: [
    HeaderComponent,
    TranslateModule,
    TranslatePipe,
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('name', { static: true }) refName!: ElementRef<HTMLDivElement>;
  @ViewChild('btnMobile', { static: true }) refBtn!: ElementRef<HTMLButtonElement>;
  isTouchDevice:boolean = false;
  isHome = true;

   ngOnInit() {
    AOS.init();
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;

    // Workaround für Safari: setze data-name explizit per Code
    const name = $localize`:@@hero.name:Michelle`; // oder via TranslateService
    this.refBtn.nativeElement.setAttribute('data-name', name);
  }

  onMouseEnter(){
    this.refName.nativeElement.textContent = 'Michelle :D';
  }

  onMouseLeave(){
    this.refName.nativeElement.textContent = 'Michelle :)';
  }
}
