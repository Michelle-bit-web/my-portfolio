import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule,
    TranslatePipe,
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() variant: "default" | "inverse" = "default";
  activeMenu = false;
  language = "en";
  isMobileView = false;
  isHome = false;

  constructor(private translate: TranslateService, private router: Router) {
    this.language = this.translate.currentLang || 'en';

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
    });

  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobileView = window.innerWidth <= 650;
  }

  ngOnInit() {
    this.onResize();
  }

  switchLanguage(current: string) {
    if (this.language === current) return;
    this.language = current;
    this.translate.use(current);
  }

  toggleMenu() {
    let overlay = document.querySelector('.overlay') as HTMLElement;
    let button = document.querySelector(".menu-btn") as HTMLElement;
    if (!overlay || !button) return;
    const isOpened = button.getAttribute("aria-expanded") === "true";
    if (isOpened) {
      this.closeOverlay(overlay, button);
    } else {
      this.openOverlay(overlay, button);
    }
  }

  closeOverlay(overlay: HTMLElement, button: HTMLElement) {
    overlay.classList.remove('open-menue');
    button.setAttribute("aria-expanded", "false");

    setTimeout(() => {
      overlay.style.display = "none";
      this.activeMenu = false;
    }, 800);
  }

  openOverlay(overlay: HTMLElement, button: HTMLElement){
    overlay.style.display = "block";
      setTimeout(() => {
        overlay.classList.add('open-menue');
      }, 10);
      button.setAttribute("aria-expanded", "true");
      this.activeMenu = true;
  }
}