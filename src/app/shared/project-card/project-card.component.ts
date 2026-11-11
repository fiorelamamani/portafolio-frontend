import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { LucideDynamicIcon } from "@lucide/angular";
import { Project } from "../../core/models/project.model";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
