import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '../../translate.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  changeLanguage = inject(TranslateService);

  openedMenu: boolean = false;
  aboutMeText : string = this.changeLanguage.aboutMeEnglish;

  german(){
    this.changeLanguage.germanLanguageActive = true;
    this.changeLanguage.englishLanguageActive = false;
    this.aboutMeText = this.changeLanguage.aboutMeGerman;
    this.changeLanguage.placeholderName = this.changeLanguage.placeholderNameGerman;
    this.changeLanguage.placeholderEmail = this.changeLanguage.placeholderEmailGerman;
    this.changeLanguage.placeholderMessage = this.changeLanguage.placeholderMessageGerman;
  }

  english(){
    this.changeLanguage.germanLanguageActive = false;
    this.changeLanguage.englishLanguageActive = true;
    this.aboutMeText = this.changeLanguage.aboutMeEnglish;
    this.changeLanguage.placeholderName = this.changeLanguage.placeholderNameEnglish;
    this.changeLanguage.placeholderEmail = this.changeLanguage.placeholderEmailEnglish;
    this.changeLanguage.placeholderMessage = this.changeLanguage.placeholderMessageEnglish;
  }

  openMenu() {
    this.openedMenu = true;
  }

  closeMenu(){
    this.openedMenu = false;
  }

  inactiveteRouterLink(){
    this.changeLanguage.routerLinkActive = false;
  }
}
