import { Component, inject } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  changeLanguage = inject(TranslateService);

  emailAdress : string = 'developer@gabor-hozleiter.com';

}
