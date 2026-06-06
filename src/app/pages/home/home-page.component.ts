import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements AfterViewInit {
  private readonly ui = inject(UiService);

  ngAfterViewInit(): void {
    this.ui.initEffects();
  }
}
