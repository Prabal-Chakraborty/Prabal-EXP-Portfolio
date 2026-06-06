import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../core/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}
