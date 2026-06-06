import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../core/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
}
