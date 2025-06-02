import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './shared/cursor/cursor.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CursorComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

}
