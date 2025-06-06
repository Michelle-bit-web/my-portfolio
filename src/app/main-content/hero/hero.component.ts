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

   ngOnInit() {
    AOS.init();
  }

  onMouseEnter(){
    this.refName.nativeElement.textContent = 'Michelle :D';
  }

  onMouseLeave(){
    this.refName.nativeElement.textContent = 'Michelle :)';
  }


}
