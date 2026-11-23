import { Component } from "@angular/core";
import { ProjectCardComponent } from "../../shared/project-card/project-card.component";
import { Project } from "../../core/models/project.model";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'UI Component Library',
      description: 'Librería de componentes UI reutilizables construida desde cero. Enfocada en accesibilidad, tipado estricto y documentación de cada componente con Storybook.',
      techStack: ['Angular', 'Tailwind CSS', 'Storybook', 'TypeScript'],
      imageUrl: 'assets/project-ui-library.png',
      repoUrl: 'https://github.com/fiorelamamani/ui-library',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Dashboard de Datos en Tiempo Real',
      description: 'Aplicación web que consume una API pública para visualizar datos dinámicos. Incluye manejo de estado, filtros de búsqueda y diseño responsive.',
      techStack: ['Angular', 'RxJS', 'Chart.js', 'Tailwind CSS'],
      imageUrl: 'assets/project-dashboard-api.png',
      repoUrl: 'https://github.com/fiorelamamani/dashboard-api',
      demoUrl: 'https://mi-dashboard.vercel.app'
    }
  ];
}
