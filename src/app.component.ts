
import { Component, ChangeDetectionStrategy, OnInit, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  ngOnInit(): void {
    // Initialize performance monitoring in development
    if (isDevMode()) {
      PerformanceMonitor.getInstance().trackWebVitals();
    }
  }
}
