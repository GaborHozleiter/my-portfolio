import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  changeLanguage = inject(TranslateService);
}
