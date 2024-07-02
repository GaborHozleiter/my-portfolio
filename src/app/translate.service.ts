import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  germanLanguageActive: boolean = false;
  englishLanguageActive: boolean = true;
  aboutMeEnglish : string = 'About me';
  aboutMeGerman : string = 'Über mich';
  iAmEnglish : string = 'I am';
  iAmGerman : string = 'Ich bin';
  letsTalkEnglish : string = 'Let’s talk!';
  letsTalkGerman : string = 'Lass uns reden!';

  constructor() { }
}
