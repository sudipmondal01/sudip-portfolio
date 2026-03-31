import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { isDevMode } from '@angular/core';

console.log('[Angular Bootstrap] Starting application bootstrap...');

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => {
  console.error('[Angular Bootstrap] CRITICAL ERROR:', err);
  const appRoot = document.querySelector('app-root');
  if (appRoot) {
    appRoot.innerHTML = `<div style="color: red; padding: 20px; font-family: monospace;">
      <h1>Application Error</h1>
      <p>${err.message}</p>
      <p>${err.stack}</p>
    </div>`;
  }
});
