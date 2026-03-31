
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero.component';
import { ProjectGridComponent } from './project-grid.component';
import { GalleryComponent } from './gallery.component';
import { AboutSectionComponent } from './about-section.component';
import { TestimonialsComponent } from './testimonials.component';
import { CtaSectionComponent } from './cta-section.component';
import { MarqueeFeedComponent } from './marquee-feed.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ProjectGridComponent,
    GalleryComponent,
    AboutSectionComponent,
    TestimonialsComponent,
    CtaSectionComponent,
    MarqueeFeedComponent
  ],
  template: `
    <app-hero />
    <app-project-grid />
    <app-gallery />
    <app-about-section />
    <app-testimonials />
    <app-cta-section />
    <app-marquee-feed />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
