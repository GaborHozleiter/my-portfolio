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
  xy : string = this.changeLanguage.aboutMeEnglish;

  german(){
    this.changeLanguage.germanLanguageActive = true;
    this.changeLanguage.englishLanguageActive = false;
    this.xy = this.changeLanguage.aboutMeGerman;
  }

  english(){
    this.changeLanguage.germanLanguageActive = false;
    this.changeLanguage.englishLanguageActive = true;
    this.xy = this.changeLanguage.aboutMeEnglish;
  }

  openMenu() {
    this.openedMenu = true;
  }

  closeMenu(){
    this.openedMenu = false;
  }
}
