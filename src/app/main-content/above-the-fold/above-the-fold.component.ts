import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold-resp.component.scss']
})

export class AboveTheFoldComponent implements OnInit {
  changeLanguage = inject(TranslateService);

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.animation-cont');
    const elementsLeft = document.querySelectorAll('.animation-cont-left');
    const elementsBottom = document.querySelectorAll('.animation-cont-bottom');
    const windowHeight = window.innerHeight;

    this.toggleInView(elements, windowHeight);
    this.toggleInView(elementsLeft, windowHeight);
    this.toggleInView(elementsBottom, windowHeight);
  }

  private toggleInView(elements: NodeListOf<Element>, windowHeight: number): void {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.85) {
        (element as HTMLElement).classList.add('in-view');
      } else {
        (element as HTMLElement).classList.remove('in-view');
      }
    });
  }
}
