import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() variant: "default" | "inverse" = "default";
  activeMenu = false;
  language = "en";

  switchLanguage(current:string){
    if(this.language === current) return;
      this.language = current;
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
