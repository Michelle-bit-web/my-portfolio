import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    RouterLink,
    TranslateModule,
    TranslatePipe,
    CommonModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  isMobileView = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobileView = window.innerWidth <= 650;
   }

  ngOnInit() {
   this.onResize();
  }
}
