import { Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
  isPrimary?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    { 
      label: 'Email', 
      value: 'fiorela.12arq@gmail.com', 
      href: 'mailto:fiorela.12arq@gmail.com', 
      icon: 'mail',
      isPrimary: true
    },
    { 
      label: 'LinkedIn', 
      value: 'Fiorela Mamani', 
      href: 'https://linkedin.com/in/fiorela-guadalupe-mamani-tique-017898146', 
      icon: 'briefcase' 
    },
    { 
      label: 'GitHub', 
      value: 'fiorelamamani', 
      href: 'https://github.com/fiorelamamani', 
      icon: 'code' 
    }
  ];
}
