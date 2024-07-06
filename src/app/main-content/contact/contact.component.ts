import { Component, inject } from '@angular/core';
import { ContactformComponent } from '../contactform/contactform.component';
import { TranslateService } from '../../translate.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  changeLanguage = inject(TranslateService);
}
