import { Component, inject } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  changeLanguage = inject(TranslateService);

  emailAdress : string = 'developer@gabor-hozleiter.com';
}
