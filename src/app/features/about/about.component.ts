import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon } from '@lucide/angular';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bioParagraphs: string[] = [
    'Soy una desarrolladora frontend con más de 4 años de experiencia creando interfaces web robustas y escalables. Me especializo en Angular y tengo sólida experiencia con React y Next.js.',
    'Disfruto resolver problemas complejos, optimizar el rendimiento y crear componentes reutilizables que faciliten el trabajo en equipo. Trabajo bajo metodologías ágiles y creo firmemente en el código limpio y la buena documentación.'
  ];

  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Herramientas y Metodologías',
      skills: ['Scrum', 'Jira', 'Git / GitLab', 'JWT']
    }
  ];
}