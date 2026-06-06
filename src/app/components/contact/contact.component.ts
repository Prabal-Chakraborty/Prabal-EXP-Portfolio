import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
}
