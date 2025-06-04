import { Component } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-legal-notice',
  imports: [

    FooterComponent,
    RouterModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
