import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './shared/cursor/cursor.component';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";

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

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    // this.translate.use(this.translate.getBrowserLang() || "en");
  }
 

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
