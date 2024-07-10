import { Component, HostListener, inject, OnInit } from '@angular/core';
import { PortfolioProjectComponent } from '../portfolio-project/portfolio-project.component';
import { TranslateService } from '../../translate.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{

  changeLanguage = inject(TranslateService);

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.xy');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.9) {
        (element as HTMLElement).classList.add('in-view');
      } else {
        (element as HTMLElement).classList.remove('in-view');
      }
    });
  }
}
