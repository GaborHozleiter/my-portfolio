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
  aboutMeTextTopEnglish : string = 'Hello. My name is Gabor and I am from Seelze in Lower Saxony. I work on various programming projects with great enthusiasm and welcome every new challenge.';
  aboutMeTextCenterEnglish : string = 'I have extensive knowledge in front-end development and am always open to new technologies. My ability to quickly adapt to new tools and trends allows me to develop innovative solutions.';
  aboutMeTextBottomEnglish : string = 'Through the Developer Academy, I have expanded my frontend development skills and am confident and competent in software development. I look forward to applying and deepening my knowledge in a new job.';
  aboutMeTextTopGerman : string = 'Hallo. Ich heiße Gabor und komme aus Seelze in Niedersachsen. Mit großer Begeisterung arbeite ich an verschiedenen Programmierprojekten und freue mich über jede neue Herausforderung.';
  aboutMeTextCenterGerman : string = 'Ich habe umfassende Kenntnisse in der Frontend-Entwicklung und bin stets offen für neue Technologien. Meine Fähigkeit, mich schnell in neue Tools und Trends einzuarbeiten, ermöglicht es mir, innovative Lösungen zu entwickeln.';
  aboutMeTextBottomGerman : string = 'Durch die Developer Akademie habe ich meine Frontend-Entwicklungsfähigkeiten ausgebaut und bin kompetent in der Software-Entwicklung. Ich freue mich darauf, mein Wissen in einem neuen Job einzusetzen und zu vertiefen.';
  skillsDescriptionEnglish : string = 'I have gained experience in building projects with various frontend technologies and concepts.';
  skillsDescriptionGerman : string = 'Ich habe Erfahrung im Erstellen von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt.';
  skillsButtonText : string = 'Get in touch';

  constructor() { }
}
