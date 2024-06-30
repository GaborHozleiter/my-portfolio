import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {

  projects = [
    {
      name :   'Join',
      skills : 'JavaScript | HTML | CSS | Firebase',
      description : 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      testLink : '#',
      githubLink : '#',
      background : '../../../assets/img/Property 1=join photo.png',
      backgroundNotebook : '../../../assets/img/Join.png'
    },
    {
      name :   'Pollo Loco',
      skills : 'JavaScript | HTML | CSS',
      description : 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      testLink : '#',
      githubLink : '#',
      background : '../../../assets/img/pollo loco background.png',
      backgroundNotebook : '../../../assets/img/Pollo loco.png'
    }
  ]
}
