import { CommonModule, ViewportScroller } from '@angular/common';
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
  constructor( public viewportScroller : ViewportScroller){

  }

  changeLanguage = inject(TranslateService);

  openedMenu: boolean = false;
  aboutMeText : string = this.changeLanguage.aboutMeEnglish;
  contactText : string = this.changeLanguage.contactEnglish;

  german(){
    this.changeLanguage.germanLanguageActive = true;
    this.changeLanguage.englishLanguageActive = false;
    this.aboutMeText = this.changeLanguage.aboutMeGerman;
    this.contactText = this.changeLanguage.contactGerman;
    this.changeLanguage.placeholderName = this.changeLanguage.placeholderNameGerman;
    this.changeLanguage.placeholderEmail = this.changeLanguage.placeholderEmailGerman;
    this.changeLanguage.placeholderMessage = this.changeLanguage.placeholderMessageGerman;
  }

  english(){
    this.changeLanguage.germanLanguageActive = false;
    this.changeLanguage.englishLanguageActive = true;
    this.aboutMeText = this.changeLanguage.aboutMeEnglish;
    this.contactText = this.changeLanguage.contactEnglish;
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

  scrollToComponent(compoentId : string) : void{
    setTimeout(() => {
        this.viewportScroller.scrollToAnchor(compoentId);
    }, 5);
  }
}
