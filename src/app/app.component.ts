import { Component} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CursorComponent } from './shared/cursor/cursor.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CursorComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'my-portfolio';

  constructor(
    private translate: TranslateService, 
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.setPageMeta();
    });

    this.setPageMeta();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  private setPageMeta() {
    this.translate.get(['meta.title', 'meta.description']).subscribe(translations => {
    this.titleService.setTitle(translations['meta.title']);
    this.meta.updateTag({ name: 'description', content: translations['meta.description'] });
  });
}
  
}
