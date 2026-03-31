
import { Component, ChangeDetectionStrategy, OnInit, isDevMode, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { PerformanceMonitor } from './utils/performance';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  template: `
    <div class="relative bg-[#040406] min-h-screen selection:bg-[#C6A96B] selection:text-black">
      <app-navbar />

      <main class="relative z-10">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    // Handle GitHub Pages 404 redirect for client-side routing
    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      this.router.navigateByUrl(redirect);
    }

    // Initialize performance monitoring in development
    if (isDevMode()) {
      PerformanceMonitor.getInstance().trackWebVitals();
    }
  }
}
