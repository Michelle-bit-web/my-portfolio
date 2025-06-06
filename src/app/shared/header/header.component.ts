import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() variant: "default" | "inverse" = "default";
  activeMenu = false;
  language = "en";
 

  constructor(private translate: TranslateService){
    this.language = this.translate.currentLang || 'en';
  }

  switchLanguage(current:string){
    if(this.language === current) return;
      this.language = current;
      this.translate.use(current);
  }

  toggleMenu(){
    const overlay = document.querySelector('.overlay');
    overlay?.classList.toggle('d_none');
    const button = document.querySelector(".menu-btn");
    const isOpened = button?.getAttribute("aria-expanded");
    if(isOpened === "false") {
      button?.setAttribute("aria-expanded", "true");
    } else {
      button?.setAttribute("aria-expanded", "false");
    }
    if(this.activeMenu){
      this.activeMenu = false
    } else {
      this.activeMenu = true;
    }
  }
}
