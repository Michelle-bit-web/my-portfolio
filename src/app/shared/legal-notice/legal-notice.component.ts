import { Component } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [

    FooterComponent,
    RouterModule,
    RouterLink,
    TranslateModule,
    TranslatePipe
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
