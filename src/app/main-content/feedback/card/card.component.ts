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
      firstName: "Anne",
      lastName: "Dalchow",
      profession: "Frontend Developer",
      profileLink: "https://www.linkedin.com/in/anne-dalchow/",
      feedback: "feedback.description-one"
    },
    {
      firstName: "Marco",
      lastName: "Palummieri",
      profession: "Frontend Developer",
      profileLink: "https://www.linkedin.com/in/marco-palummieri/",
      feedback: "feedback.description-two"
    },
    {
      firstName: "Viktor",
      lastName: "Naumann",
      profession: "Frontend Developer",
      profileLink: "https://www.linkedin.com/in/viktor-naumann/",
      feedback: "feedback.description-three"
    }
  ];
}
