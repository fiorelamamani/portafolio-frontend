import { Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
