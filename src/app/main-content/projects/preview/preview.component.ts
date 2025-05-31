import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {

}
