import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { BioComponent } from "./bio/bio.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjFolioComponent } from "./proj-folio/proj-folio.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, BioComponent, SkillsComponent, ProjFolioComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  faCoffee = 'faCoffee'
}
