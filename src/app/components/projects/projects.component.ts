import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/portfolio.data';
import { getProjectIcon } from '../../core/icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  projectIcon = getProjectIcon;
}
