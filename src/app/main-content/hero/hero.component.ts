import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  // @ViewChild('titleUpper', { static: true }) refHeadlineUpper!: ElementRef<HTMLHeadingElement>;
  // ngAfterViewInit() {
  //   console.log('Was passiert');
  //   this.bounce();
  // }

  // @HostListener('document:mouseover')
  // onMouseOver() {
    
  //   this.refHeadlineUpper.nativeElement.style.color = "yellow";
   
    
  // }

  // bounce(){
  //   this.refHeadlineUpper.nativeElement.style.scale = "1.1"
  //   requestAnimationFrame(() => this.bounce());
  // }
  // document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
//   element.addEventListener("mouseover",
//     (e) => bounce(e.target));
// });

// function bounce(letter) {
//   if (!letter.classList.contains("bounce")) {
//     letter.classList.add("bounce");
//     setTimeout(
//       function () {
//         letter.classList.remove("bounce");
//       },
//       1000
//     );
//   }
// }

}
