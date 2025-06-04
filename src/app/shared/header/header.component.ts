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
  language = "en";

  switchLanguage(current:string){
    if(this.language === current) return;
      this.language = current;
  }

  toggleMenu(){
    const overlay = document.querySelector('.overlay');
    overlay?.classList.toggle('d_none');
    const buttonThree = document.querySelector(".menu-btn");
    const isOpened = buttonThree?.getAttribute("aria-expanded");
    if(isOpened === "false") {
      buttonThree?.setAttribute("aria-expanded", "true");
    } else {
      buttonThree?.setAttribute("aria-expanded", "false");
    }
  }
}
