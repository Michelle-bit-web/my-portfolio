import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-feedback',
  imports: [
    TranslateModule,
    CardComponent
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
