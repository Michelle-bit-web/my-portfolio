import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    CommonModule
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
    feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reprehenderit dicta nihil provident hic?"
  },
  {
    firstName: "firstName",
    lastName: "lastName",
    profession: "profession",
    profileLink: "profileLink",
    feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reprehenderit dicta nihil provident hic?"
  },
  {
    firstName: "firstName",
    lastName: "lastName",
    profession: "profession",
    profileLink: "profileLink",
    feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reprehenderit dicta nihil provident hic?"
  }
];

}
