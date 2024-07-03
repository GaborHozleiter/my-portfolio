import { Component, inject } from '@angular/core';
import { ContactformComponent } from '../contactform/contactform.component';
import { TranslateService } from '../../translate.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  changeLanguage = inject(TranslateService);
}
