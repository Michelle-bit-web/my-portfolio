import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

export interface List {
  firstName: string;
  lastName: string;
  profession: string;
  profileLink: string;
  feedback: string;
}

@Component({
  selector: 'app-card',
  imports: [
    CommonModule,
    TranslateModule,
    TranslatePipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

list: List[] = [
  {
    firstName: "firstName",
    lastName: "lastName",
    profession: "profession",
    profileLink: "profileLink",
    feedback: "feedback.description-one"
  },
  {
    firstName: "firstName",
    lastName: "lastName",
    profession: "profession",
    profileLink: "profileLink",
    feedback: "feedback.description-two"
  },
  {
    firstName: "firstName",
    lastName: "lastName",
    profession: "profession",
    profileLink: "profileLink",
    feedback: "feedback.description-three"
  }
];

}
