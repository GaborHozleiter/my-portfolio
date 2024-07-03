import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold-resp.component.scss']
})
export class AboveTheFoldComponent {

  changeLanguage = inject(TranslateService);

  

}
