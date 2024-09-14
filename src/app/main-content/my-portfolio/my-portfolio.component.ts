import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent implements OnInit {

  projects = [
    {
      name :   'DABubble',
      skills : 'Angular | TypeScript | Firebase',
      descriptionEnglish : 'A powerful and user-friendly slack or discord clone that enables seamless team communication, collaboration, and organization.',
      descriptionGerman : 'Ein leistungsstarker und benutzerfreundlicher Slack- bzw. Discord-Klon, der Ihnen nahtlose Teamkommunikation, Zusammenarbeit und Organisation ermöglicht.',
      testLink : 'https://pollo-loco.gabor-hozleiter.com/',
      githubLink : 'https://github.com/GaborHozleiter/El_Pollo_Loco',
      background : '../../../assets/img/dabubble_background.png',
      backgroundNotebook : '../../../assets/img/dabubble_pc.png'
    },
    {
      name :   'Pollo Loco',
      skills : 'JavaScript | HTML | CSS',
      descriptionEnglish : 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionGerman : 'Jump and Run Spiel auf objektorientierter Basis. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      testLink : 'https://pollo-loco.gabor-hozleiter.com/',
      githubLink : 'https://github.com/GaborHozleiter/El_Pollo_Loco',
      background : '../../../assets/img/pollo loco background.png',
      backgroundNotebook : '../../../assets/img/Pollo loco.png'
    },
    {
      name :   'Join',
      skills : 'JavaScript | HTML | CSS | Firebase',
      descriptionEnglish : 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionGerman : 'Task-Manager inspiriert vom Kanban-System. Aufgaben erstellen und organisieren per Drag-and-Drop, Nutzer und Kategorien zuweisen.',
      testLink : 'https://join.gabor-hozleiter.com/',
      githubLink : 'https://github.com/GaborHozleiter/Join',
      background : '../../../assets/img/Property 1=join photo.png',
      backgroundNotebook : '../../../assets/img/Join.png'
    }
  ]


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
    const windowHeight = window.innerHeight;
    this.toggleInView(elements, windowHeight);
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
