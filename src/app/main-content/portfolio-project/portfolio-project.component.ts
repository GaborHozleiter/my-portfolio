import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {

  changeLanguage = inject(TranslateService);

  projects = [
    {
      name :   'Join',
      skills : 'JavaScript | HTML | CSS | Firebase',
      descriptionEnglish : 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionGerman : 'Task-Manager inspiriert vom Kanban-System. Aufgaben erstellen und organisieren per Drag-and-Drop, Nutzer und Kategorien zuweisen.',
      testLink : '#',
      githubLink : 'https://github.com/GaborHozleiter/Join',
      background : '../../../assets/img/Property 1=join photo.png',
      backgroundNotebook : '../../../assets/img/Join.png'
    },
    {
      name :   'Pollo Loco',
      skills : 'JavaScript | HTML | CSS',
      descriptionEnglish : 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionGerman : 'Jump and Run Spiel auf objektorientierter Basis. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      testLink : '#',
      githubLink : 'https://github.com/GaborHozleiter/El_Pollo_Loco',
      background : '../../../assets/img/pollo loco background.png',
      backgroundNotebook : '../../../assets/img/Pollo loco.png'
    }
  ]
}
