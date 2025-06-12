import { Component, HostListener } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    RouterLink,
    TranslateModule,
    TranslatePipe,
    CommonModule

  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  isMobileView = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobileView = window.innerWidth <= 650;
   }

  ngOnInit() {
   this.onResize();
  }
}
