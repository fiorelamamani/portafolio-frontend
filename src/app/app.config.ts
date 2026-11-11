import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideLucideIcons } from "@lucide/angular"
import { APP_LUCIDE_ICONS } from "./shared/lucide-icons";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideLucideIcons(...APP_LUCIDE_ICONS)
  ]
};
