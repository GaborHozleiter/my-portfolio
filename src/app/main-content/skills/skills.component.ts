import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
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
    const windowHeight = window.innerHeight;

    this.toggleInView(elements, windowHeight);
    this.toggleInView(elementsLeft, windowHeight);
  }

  private toggleInView(elements: NodeListOf<Element>, windowHeight: number): void {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      this.updateView(element, rect.top <= windowHeight * 0.85);
    });
  }

  private updateView(element: Element, inView: boolean): void {
    if (inView) {
      (element as HTMLElement).classList.add('in-view');
    } else {
      (element as HTMLElement).classList.remove('in-view');
    }
  }
}
