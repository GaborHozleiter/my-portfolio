import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss' , './about-me-resp.component.scss',]
})
export class AboutMeComponent implements OnInit{

  changeLanguage = inject(TranslateService);

    hoveredBulb: boolean = false;
    hoveredPuzzle:boolean = false;

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
        if (rect.top <= windowHeight * 0.1) {
          (element as HTMLElement).classList.add('in-view');
        } else {
          (element as HTMLElement).classList.remove('in-view');
        }
      });
    }

    changeBulbImage(){
      this.hoveredBulb = true;
    }

    changePuzzleImage(){
      this.hoveredPuzzle = true;
    }
}
