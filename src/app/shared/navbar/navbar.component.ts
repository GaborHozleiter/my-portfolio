import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  changeLanguage = inject(TranslateService);

  openedMenu: boolean = false;
  germanLanguageActive: boolean = false;
  englishLanguageActive: boolean = true;

  german(){
    this.germanLanguageActive = true;
    this.englishLanguageActive = false;
  }

  english(){
    this.germanLanguageActive = false;
    this.englishLanguageActive = true;
  }

  openMenu() {
    this.openedMenu = true;
  }

  closeMenu(){
    this.openedMenu = false;
  }
}
