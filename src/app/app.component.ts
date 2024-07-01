import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboveTheFoldComponent, AboutMeComponent, SkillsComponent, PortfolioComponent,
    ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
