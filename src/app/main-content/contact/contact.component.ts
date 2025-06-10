import { Component, inject } from '@angular/core';
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
export class ContactComponent {
  http = inject(HttpClient)
  contactData = {
    name: '',
    email: '',
    message: '',
    checkedStatus: false,
  }

  mailTest = true;
  mailSend = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //hier könnte man auch weiteres ergänzen, was passieren soll
            this.showSendingResponse();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'), //die consolen-Info könnte man entfernen am Ende
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      //Wenn man oben noch was ergänzt, muss das hier auch hin?
      ngForm.resetForm();
    }
  }

  showSendingResponse(){
    this.mailSend = true;
    console.log('mail send')
    setTimeout(() => {
      this.mailSend = false;
      console.log('overlay inactivated after 3s')
    }, 4000)
  }

  toggleCheck(){
    if (!this.contactData.checkedStatus){
      this.contactData.checkedStatus = true;
    } else {
      this.contactData.checkedStatus = false;
    }
  }
}
