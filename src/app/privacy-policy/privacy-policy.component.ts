import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit{

  changeLanguage = inject(TranslateService);

  emailAdress : string = 'developer@gabor-hozleiter.com';

  ngOnInit(): void {
      window.scrollTo(0,0);
  }
}
