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

  constructor(private translate: TranslateService, private router: Router){
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
