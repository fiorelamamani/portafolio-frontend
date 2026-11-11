import { Component } from '@angular/core';
import { LucideDynamicIcon } from "@lucide/angular"

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
