import { Component } from '@angular/core';
import { FooterComponent } from '../../main-content/contact/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    FooterComponent,
    RouterModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
