import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PreviewComponent } from './main-content/projects/preview/preview.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'preview', component: PreviewComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
];
