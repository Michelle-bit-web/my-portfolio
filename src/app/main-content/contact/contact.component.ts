import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    FooterComponent,
    TranslateModule,
    TranslatePipe,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{
  http = inject(HttpClient);
  @ViewChildren('loadIcon') touchIcons!: QueryList<ElementRef>;
  isTouchDevice:boolean = false;
  private observer!: IntersectionObserver;
  contactData = {
    name: '',
    email: '',
    message: '',
    checkedStatus: false,
  };

  mailTest = false; //auf false, um Live senden zu können
  mailSend = false;

  post = {
    endPoint: 'https://michelle-puschkarow.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',  
        // 'Content-Type': 'application/json', //laut KI
        responseType: 'text',
        // responseType: 'text' as 'json', //laut KI
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSendingResponse();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  showSendingResponse(){
    this.mailSend = true;
    setTimeout(() => {
      this.mailSend = false;
    }, 3000)
  }

  toggleCheck(){
    if (!this.contactData.checkedStatus){
      this.contactData.checkedStatus = true;
    } else {
      this.contactData.checkedStatus = false;
    }
  }

  ngOnInit(): void {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.isTouchDevice = isTouch;
 }

  ngAfterViewInit() {
      this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('load');
        } else {
          el.classList.remove('load');
        }
      });
    }, {
      threshold: 0.2
    });
    this.touchIcons.forEach((el: ElementRef) => {
      this.observer.observe(el.nativeElement);
    });
    }
}
