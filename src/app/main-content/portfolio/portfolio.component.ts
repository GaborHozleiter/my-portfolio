import { Component, inject } from '@angular/core';
import { PortfolioProjectComponent } from '../portfolio-project/portfolio-project.component';
import { TranslateService } from '../../translate.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  changeLanguage = inject(TranslateService);
}
