import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './shared/cursor/cursor.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CursorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

}
