import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  changeLanguage = inject(TranslateService);

    hoveredBulb: boolean = false;
    hoveredPuzzle:boolean = false;

    changeBulbImage(){
      this.hoveredBulb = true;
    }

    changePuzzleImage(){
      this.hoveredPuzzle = true;
    }
}
