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
  nameLocalized = '';

   ngOnInit() {
    AOS.init();
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
    this.nameLocalized = $localize`:@@hero.name:I´m Michelle`;
  }

  onMouseEnter(){
    this.refName.nativeElement.textContent = 'Michelle :D';
  }

  onMouseLeave(){
    this.refName.nativeElement.textContent = 'Michelle :)';
  }
}
