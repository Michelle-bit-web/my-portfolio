import { Component } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    FooterComponent,
    RouterModule,
    RouterLink,
    TranslateModule,
    TranslatePipe

  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
