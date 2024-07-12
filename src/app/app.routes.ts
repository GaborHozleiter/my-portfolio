import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path : '', component : MainContentComponent, title : 'Gabor Hozleiter'},
    {path : 'imprint', component : ImprintComponent, title : 'Imprint'},
    {path : 'privacy-policy' , component : PrivacyPolicyComponent, title : 'Privacy Policy'},
    {path : 'above-the-fold-container', redirectTo: '', title : 'Gabor Hozleiter'},
    {path : 'about-me-container' , redirectTo: '', title : 'About me'},
    {path : 'skills-container' , redirectTo: '', title : 'Skills'},
    {path : 'portfolio-container' , redirectTo: '', title : 'Portfolio'},
    {path : 'contact-container' , redirectTo: '', title : 'Contact'},
];

