
import { Component, ChangeDetectionStrategy, OnInit, isDevMode, inject, ChangeDetectorRef } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    console.log('[AppComponent] Initializing...');
    
    // Handle GitHub Pages 404 redirect for client-side routing
    const redirect = sessionStorage.redirect;
    if (redirect) {
      console.log('[AppComponent] Handling redirect:', redirect);
      delete sessionStorage.redirect;
      this.router.navigateByUrl(redirect);
    }

    // Trigger change detection to ensure rendering
    this.cdr.markForCheck();

    // Initialize performance monitoring in development
    if (isDevMode()) {
      console.log('[AppComponent] Development mode - initializing performance monitor');
      PerformanceMonitor.getInstance().trackWebVitals();
    }
    
    console.log('[AppComponent] Initialization complete');
  }
}
