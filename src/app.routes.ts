
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'archive',
    loadComponent: () => import('./components/archive.component').then(m => m.ArchiveComponent)
  },
  {
    path: 'archive/:category',
    loadComponent: () => import('./components/archive.component').then(m => m.ArchiveComponent)
  },
  {
    path: 'films',
    loadComponent: () => import('./components/films-page.component').then(m => m.FilmsPageComponent)
  },
  {
    path: 'artist',
    loadComponent: () => import('./components/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'connect',
    loadComponent: () => import('./components/contact-page.component').then(m => m.ContactPageComponent)
  },
  { path: '**', redirectTo: '' }
];
