import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  english = false;

  switchLanguage(){
    if(this.english){
      this.english = false;
    } else {
      this.english = true;
    }
  }
}
