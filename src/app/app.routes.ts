import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PreviewComponent } from './projects/preview/preview.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'preview', component: PreviewComponent},
   
];
