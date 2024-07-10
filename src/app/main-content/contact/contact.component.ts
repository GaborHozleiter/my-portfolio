import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ContactformComponent } from '../contactform/contactform.component';
import { TranslateService } from '../../translate.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

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

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.85) {
        (element as HTMLElement).classList.add('in-view');
      } else {
        (element as HTMLElement).classList.remove('in-view');
      }
    });
    elementsLeft.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.85) {
        (element as HTMLElement).classList.add('in-view');
      } else {
        (element as HTMLElement).classList.remove('in-view');
      }
    });
  }
}
