import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  germanLanguageActive: boolean = false;
  englishLanguageActive: boolean = true;
  massegeSent : boolean = false;
  routerLinkActive : boolean = false;

  aboutMeEnglish : string = 'About me';
  aboutMeGerman : string = 'Über mich';
  iAmEnglish : string = 'I am';
  iAmGerman : string = 'Ich bin';
  letsTalkEnglish : string = 'Let’s talk!';
  letsTalkGerman : string = 'Lass uns reden!';
  aboutMeTextTopEnglish : string = 'Hello. My name is Gabor and I am from Seelze in Lower Saxony. I work on various programming projects with great enthusiasm and welcome every new challenge.';
  aboutMeTextCenterEnglish : string = 'I have extensive knowledge in front-end development and am always open to new technologies. My ability to quickly adapt to new tools and trends allows me to develop innovative solutions.';
  aboutMeTextBottomEnglish : string = 'Through the Developer Academy, I have expanded my frontend development skills and am confident and competent in software development. I look forward to applying and deepening my knowledge in a new job.';
  aboutMeTextTopGerman : string = 'Hallo. Ich heiße Gabor und komme aus Seelze in Niedersachsen. Begeistert arbeite ich an verschiedenen Programmierprojekten und freue mich über jede neue Herausforderung.';
  aboutMeTextCenterGerman : string = 'Ich habe umfassende Kenntnisse in der Frontend-Entwicklung und bin offen für neue Technologien. Dank meiner schnellen Einarbeitung in neue Tools kann ich innovative Lösungen entwickeln.';
  aboutMeTextBottomGerman : string = 'Durch die Developer Akademie habe ich meine Frontend-Fähigkeiten ausgebaut und bin kompetent in Software-Entwicklung. Ich freue mich darauf, mein Wissen in einem neuen Job zu vertiefen.';
  skillsDescriptionEnglish : string = 'I have gained experience in building projects with various frontend technologies and concepts.';
  skillsDescriptionGerman : string = 'Ich habe Erfahrung im Erstellen von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt.';
  skillsButtonTextEnglish : string = 'Get in touch';
  skillsButtonTextGerman : string = 'Kontaktiere mich';
  portfolioDescriptionEnglish : string = 'This page is a sample of my work! scroll down to view other projects I have develped.';
  portfolioDescriptionGerman : string = 'Diese Seite ist ein Beispiel meiner Arbeit! Scrollen Sie nach unten, um weitere Projekte zu sehen.';
  contactSolverTitleEnglish : string = 'Got a problem to solve?';
  contactSolverTitleGerman : string = 'Ein Problem zu lösen?';
  contactSolverDescriptionEnglish : string = 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.';
  contactSolverDescriptionGerman : string = 'Kontaktiere mich über dieses Formular. Ich freue mich darauf, deine Ideen kennenzulernen und mit meiner Arbeit zu deinen Projekten beizutragen.';
  contactSolverAskEnglish : string = 'Need a Frontend developer?';
  contactSolverAskGerman : string = 'Brauchst du einen Frontend-Entwickler?';
  contactSolverContactEnglish : string = 'Contact me!';
  contactSolverContactGerman : string = 'Kontaktiere mich!';
  contactHeaderTitleEnglish : string = 'Contact';
  contactHeaderTitleGerman : string = 'Kontakt';
  placeholderName : string = 'Your name';
  placeholderEmail : string = 'Your email';
  placeholderMessage : string = 'Your message';
  placeholderNameEnglish : string = 'Your name';
  placeholderNameGerman : string = 'Deine Name';
  placeholderEmailEnglish : string = 'Your email';
  placeholderEmailGerman : string = 'Dein Email';
  placeholderMessageEnglish : string = 'Your message';
  placeholderMessageGerman : string = 'Deine Nachricht';
  inputNameWarningEnglish : string = 'Your name is required!';
  inputNameWarningGerman : string = 'Dein Name wird benötigt!';
  inputEmailWarningEnglish : string = 'Your email is required!';
  inputEmailWarningGerman : string = 'Deine E-Mail wird benötigt!';
  inputMessageWarningEnglish : string = 'Your message is empty!';
  inputMessageWarningGerman : string = 'Deine Nachricht ist leer!';
  acceptPolicyWarningEnglish : string = 'Please accept the privacy policy!';
  acceptPolicyWarningGerman : string = 'Bitte akzeptiere die Datenschutzbestimmungen!';
  acceptPolicyTextLeftEnglish : string = "I've read the";
  acceptPolicyTextLeftGerman : string = 'Ich willige in die Datenverarbeitung gemäß der';
  acceptPolicyTextRightEnglish : string = 'and agree to the processing of my data as outlined.';
  acceptPolicyTextRightGerman : string = 'ein.';
  privacyPolicyEnglish : string = 'privacy policy';
  privacyPolicyGerman : string = 'Datenschutzerklärung';
  sendMessageButtonEnglish : string = 'Send Message:)';
  sendMessageButtonGerman : string = 'Nachricht senden:)';
  MessageSentButtonEnglish : string = 'Message sent:)';
  MessageSentButtonGerman : string = 'Nachricht gesendet:)';
  imprintEnglish : string = 'Imprint';
  imprintGerman : string = 'Impressum';

  constructor() { }
}
