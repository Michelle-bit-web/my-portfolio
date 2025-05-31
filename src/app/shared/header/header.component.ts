import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() variant: "default" | "inverse" = "default";
  english = false;

  switchLanguage(){
    if(this.english){
      this.english = false;
    } else {
      this.english = true;
    }
  }
}
