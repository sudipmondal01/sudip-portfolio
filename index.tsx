import './src/styles.css';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './src/app.component';
import { routes } from './src/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    { provide: APP_BASE_HREF, useValue: './' }
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
