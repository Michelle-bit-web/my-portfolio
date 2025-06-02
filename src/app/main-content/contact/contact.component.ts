import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    FooterComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
    checkedStatus: false,
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm)
    if(ngForm.valid && ngForm.submitted)
    console.log('form submitted', this.contactData);
    
  }
}
