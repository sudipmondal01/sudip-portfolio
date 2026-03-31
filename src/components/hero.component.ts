
import { Component, ChangeDetectionStrategy, signal, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroImage {
  url: string;
  alt: string;
  meta: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  template: `
    <section 
      class="relative pt-28 lg:pt-40 pb-16 lg:pb-32 px-6 lg:px-10 overflow-hidden flex flex-col justify-center"
      role="region" 
      aria-roledescription="carousel"
      aria-label="Cinematic Portfolio Slideshow"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      <!-- Background Depth Glow -->
      <div class="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-glow-radial -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40"></div>

      <div class="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-20">
        
        <!-- Left Content (Editorial Headline - Static) -->
        <div class="lg:col-span-7 flex flex-col">
          <div class="reveal">
            <h1 class="flex flex-col mb-16">
              <span class="text-8xl md:text-[240px] font-serif-italic text-[#C6A96B] leading-[0.7] tracking-tighter -ml-1 md:-ml-8 drop-shadow-2xl select-none">
                Frames
              </span>
              <div class="flex items-center gap-8 mt-10 md:mt-14">
                <div class="h-[1px] w-16 md:w-32 bg-[#C6A96B]/20"></div>
                <span class="text-xl md:text-[48px] font-medium uppercase tracking-[0.5em] text-white/90 leading-none select-none flex items-center">
                  Films <span class="font-serif-italic lowercase tracking-normal text-[#C6A96B] mx-4 md:mx-6 transform -translate-y-1 md:-translate-y-2">&</span> Stories
                </span>
              </div>
            </h1>
          </div>

          <div class="max-w-xl space-y-10 reveal delay-1">
            <div class="flex gap-6">
              <div class="w-[1.5px] h-auto bg-gradient-to-b from-[#C6A96B] to-transparent"></div>
              <p class="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                Every moment carries a story waiting to be told. Through my lens, I capture emotions as they naturally unfold, preserving the laughter, the quiet glances, and the unspoken connections that make each journey unique.
              </p>
            </div>
            
            <div class="flex gap-6">
              <div class="w-[1.5px] h-auto bg-gradient-to-b from-[#C6A96B] to-transparent"></div>
              <p class="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                With 50+ stories captured, from weddings filled with love to travels rich with culture and experience, my work is about documenting stories in their most authentic and timeless form.
              </p>
            </div>

            <div class="flex flex-wrap gap-5 pt-10">
              <a routerLink="/archive" class="px-14 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white shadow-2xl shadow-[#C6A96B]/10 active:scale-95">
                View Portfolio
              </a>
              <a routerLink="/connect" class="px-14 py-6 bg-transparent border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:border-white hover:bg-white/5 active:scale-95">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <!-- Right: The Cinematic Card (Slideshow Card) -->
        <div 
          class="lg:col-span-5 relative group" 
          (mouseenter)="onMouseEnter()" 
          (mouseleave)="onMouseLeave()"
        >
          <div class="relative z-10 aspect-[3.5/4.5] overflow-hidden border border-white/5 bg-[#040406] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            @for (image of heroImages; track image.url; let i = $index) {
              <div 
                class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                [class.opacity-100]="activeSlide() === i"
                [class.opacity-0]="activeSlide() !== i"
                [class.scale-100]="activeSlide() === i"
                [class.scale-95]="activeSlide() !== i"
                [style.z-index]="activeSlide() === i ? 20 : 10"
                [attr.aria-hidden]="activeSlide() !== i"
              >
                <picture>
                  <!-- WebP format for modern browsers -->
                  <source [srcset]="getOptimizedImageUrl(image.url, 'webp')" type="image/webp">
                  <!-- Fallback to original format -->
                  <img 
                    [src]="getOptimizedImageUrl(image.url)"
                    [alt]="image.alt"
                    class="w-full h-full object-cover will-change-transform"
                    [class.animate-cinematic-zoom]="activeSlide() === i"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                  >
                </picture>
                <!-- Cinematic Scrims -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div class="absolute inset-0 bg-black/10"></div>
                
                <!-- Metadata Overlay -->
                <div class="absolute bottom-10 left-10 text-white z-30 transition-all duration-1000" [class.translate-y-4]="activeSlide() !== i" [class.opacity-0]="activeSlide() !== i">
                  <p class="text-[9px] font-mono-tech text-[#C6A96B] font-bold uppercase tracking-[0.3em]">{{ image.meta }}</p>
                </div>
              </div>
            }

            <!-- Progress Bar (Bottom) -->
            <div class="absolute bottom-0 left-0 right-0 z-40">
              <div class="w-full h-1 bg-black/20 backdrop-blur-sm">
                <div 
                  class="h-full bg-[#C6A96B] animate-progress-bar"
                  [style.animation-play-state]="isPaused() ? 'paused' : 'running'"
                  [attr.key]="animationKey()"
                ></div>
              </div>
            </div>

            <!-- Navigation Arrow Button (Bottom Right) -->
            <div 
              class="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-50 transition-all duration-500 ease-out"
              [class.opacity-100]="showControls() || isPaused()"
              [class.translate-y-0]="showControls() || isPaused()"
              [class.opacity-0]="!(showControls() || isPaused())"
              [class.translate-y-4]="!(showControls() || isPaused())"
            >
              <button 
                (click)="manualNext($event)"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C6A96B]/40 flex items-center justify-center text-[#C6A96B] bg-black/40 backdrop-blur-md hover:bg-[#C6A96B] hover:text-black transition-all duration-300 shadow-lg active:scale-90"
                aria-label="Next image"
              >
                <span class="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 w-full h-full border border-white/5 -z-10 transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>

      <!-- Navigation Guides -->
      <div class="absolute left-10 bottom-20 hidden xl:flex flex-col items-center gap-10 z-30">
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.5em] text-gray-600">
          <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors rotate-180 [writing-mode:vertical-lr]">Instagram</a>
          <a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors rotate-180 [writing-mode:vertical-lr]">Vimeo</a>
        </div>
        <div class="w-px h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes cinematicZoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.02); }
    }
    .animate-cinematic-zoom {
      animation: cinematicZoom 8s ease-out forwards;
      will-change: transform;
    }
    
    @keyframes progressBar {
      0% { 
        width: 0%; 
        opacity: 0;
      }
      5% { opacity: 1; }
      100% { 
        width: 100%; 
        opacity: 1;
      }
    }
    .animate-progress-bar {
      animation: progressBar 7s linear forwards;
      will-change: width;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown.ArrowRight)': 'manualNext($event)',
    '(window:keydown.ArrowLeft)': 'prevSlide()',
    '(window:keydown.Space)': 'togglePause($event)'
  }
})
export class HeroComponent implements OnInit, OnDestroy {
  activeSlide = signal(0);
  isPaused = signal(false);
  showControls = signal(false);
  animationKey = signal(0);
  
  private timer: any;
  private hideTimer: any;
  private readonly ROTATION_INTERVAL = 7000;
  private touchStartX = 0;

  heroImages: HeroImage[] = [
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A2320_Original_nutyy7.jpg', 
      alt: 'Wedding Narrative',
      meta: 'ISO 100 • f/1.8 • 1/200s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5194_l4lysf.jpg', 
      alt: 'Editorial Portrait',
      meta: 'ISO 400 • f/2.8 • 1/500s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5195_z3sj6h.jpg', 
      alt: 'Fashion Editorial',
      meta: 'ISO 200 • f/1.4 • 1/1000s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A6852_iqtgvu.jpg', 
      alt: 'Travel Story',
      meta: 'ISO 64 • f/8.0 • 1/250s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/83C39FC3-6B8C-43C5-B339-328974B8627A_ebefds.jpg', 
      alt: 'Architectural Study',
      meta: 'ISO 100 • f/11 • 1/60s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg', 
      alt: 'Still Life',
      meta: 'ISO 200 • f/2.0 • 1/125s'
    },
    { 
      url: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706685/Portfolio_Photo-1_pavtot.jpg', 
      alt: 'Cinematic Street',
      meta: 'ISO 200 • f/1.4 • 1/500s'
    }
  ];

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
    if (this.hideTimer) clearTimeout(this.hideTimer);
  }

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      if (!this.isPaused()) {
        this.nextSlide();
      }
    }, this.ROTATION_INTERVAL);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nextSlide() {
    this.activeSlide.update(current => (current + 1) % this.heroImages.length);
    this.animationKey.update(key => key + 1);
  }

  prevSlide() {
    this.activeSlide.update(current => (current - 1 + this.heroImages.length) % this.heroImages.length);
    this.animationKey.update(key => key + 1);
    this.startTimer();
  }

  goToSlide(index: number) {
    this.activeSlide.set(index);
    this.animationKey.update(key => key + 1);
    this.startTimer();
  }

  manualNext(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.nextSlide();
    this.startTimer();
  }

  togglePause(event: Event) {
    event.preventDefault();
    this.isPaused.update(v => !v);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].screenX;
    this.showControls.set(true);
    if (this.hideTimer) clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.showControls.set(false), 3000);
  }

  onMouseEnter() {
    this.isPaused.set(true);
    this.showControls.set(true);
    if (this.hideTimer) clearTimeout(this.hideTimer);
  }

  onMouseLeave() {
    this.isPaused.set(false);
    this.showControls.set(false);
  }

  onTouchEnd(event: TouchEvent) {
    const touchStartX = this.touchStartX;
    const touchEndX = event.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) this.nextSlide();
      else this.prevSlide();
      this.startTimer();
    }
  }

  getOptimizedImageUrl(originalUrl: string, format: string = 'auto'): string {
    // Convert Cloudinary URLs to optimized versions
    if (originalUrl.includes('res.cloudinary.com')) {
      // Add optimization parameters: auto format, quality auto, responsive
      const separator = originalUrl.includes('?') ? '&' : '?';
      return `${originalUrl}${separator}f_${format},q_auto,w_1200,c_limit`;
    }
    return originalUrl;
  }
}
