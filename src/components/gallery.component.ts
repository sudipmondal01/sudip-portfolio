
import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  template: `
    <div 
      class="group relative overflow-hidden bg-white/5 w-full h-full cursor-pointer"
      [class]="aspectClass()"
      (click)="openLightbox()"
    >
      <!-- Low-res blurred placeholder -->
      <img 
        [src]="lowResUrl()" 
        class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50 transition-opacity duration-1000"
        [class.opacity-0]="isLoaded()"
        alt=""
      >
      
      <!-- High-res image -->
      <img 
        [src]="src()" 
        [alt]="alt()"
        loading="lazy"
        decoding="async"
        (load)="isLoaded.set(true)"
        class="relative w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        [class.opacity-0]="!isLoaded()"
        [class.scale-110]="!isLoaded()"
        [class.blur-lg]="!isLoaded()"
      >

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center z-10">
        @if (categoryLabel()) {
          <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A96B] mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{{ categoryLabel() }}</span>
        }
        <span class="text-[10px] font-medium uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 delay-75">View Fragment</span>
      </div>
    </div>

    <!-- Minimal Lightbox -->
    @if (isLightboxOpen()) {
      <div 
        class="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-20 bg-black/98 backdrop-blur-3xl animate-fade-in"
        (click)="closeLightbox()"
      >
        <button 
          (click)="closeLightbox()" 
          class="absolute top-6 right-6 lg:top-10 lg:right-10 text-white opacity-40 hover:opacity-100 transition-opacity z-[1010] p-4"
          aria-label="Close Lightbox"
        >
          <span class="material-symbols-outlined text-4xl">close</span>
        </button>

        <div 
          class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center animate-lightbox"
          (click)="$event.stopPropagation()"
        >
          <img 
            [src]="src()" 
            [alt]="alt()" 
            class="max-w-full max-h-full object-contain shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5"
          >
          
          <div class="absolute bottom-0 left-0 w-full p-6 lg:p-8 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
             <div class="max-w-[70%]">
               <p class="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-[#C6A96B] mb-1 lg:mb-2 font-mono-tech">{{ categoryLabel() }}</p>
               <h3 class="text-lg lg:text-xl font-serif-italic text-white/90 italic truncate">{{ alt() }}</h3>
             </div>
             <p class="text-[8px] lg:text-[9px] text-white/30 tracking-widest font-mono-tech uppercase">Digital Archive</p>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown.escape)': 'onEsc()'
  }
})
export class GalleryImageComponent {
  src = input.required<string>();
  alt = input.required<string>();
  aspectClass = input<string>('aspect-square');
  categoryLabel = input<string>('');
  
  isLoaded = signal(false);
  isLightboxOpen = signal(false);
  
  lowResUrl = () => {
    const s = this.src();
    // Only attempt to find seed for Picsum URLs to avoid invalid low-res paths
    if (s.includes('picsum.photos') && s.includes('seed')) {
      const parts = s.split('/');
      const seedIndex = parts.indexOf('seed') + 1;
      const seed = parts[seedIndex];
      return `https://picsum.photos/seed/${seed}/20/20`;
    }
    // For Unsplash or other sources, the original URL will still look like a nice blurred backdrop
    return s;
  };

  openLightbox() {
    this.isLightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  onEsc() {
    if (this.isLightboxOpen()) this.closeLightbox();
  }
}

@Component({
  selector: 'app-gallery',
  imports: [GalleryImageComponent],
  template: `
    <section class="py-24 lg:py-40 bg-[#040405] border-y border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-glow-radial opacity-50 pointer-events-none"></div>

      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div class="text-center mb-24 lg:mb-32 flex flex-col items-center reveal">
          <span class="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.6em] text-[#C6A96B] mb-6 lg:mb-8 font-mono-tech">The Aesthetic</span>
          <h2 class="text-4xl lg:text-8xl font-medium mb-8 lg:mb-10 tracking-tighter leading-tight">Signature Frames</h2>
          <p class="text-gray-400 max-w-2xl font-light text-lg lg:text-xl leading-relaxed">
            A curation of raw emotions, cultural richness, and the quiet beauty found in everyday moments.
          </p>
        </div>

        <!-- Masonry-style Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col gap-8">
            <app-gallery-image src="https://picsum.photos/seed/g1/1200/1500" alt="Shadow Play" aspectClass="aspect-[4/5]" categoryLabel="Editorial" class="reveal" />
            <app-gallery-image src="https://picsum.photos/seed/g2/1200/800" alt="Ethereal Shore" aspectClass="aspect-[3/2]" categoryLabel="Travel" class="reveal delay-1" />
          </div>
          <div class="flex flex-col gap-8 pt-0 lg:pt-32">
            <app-gallery-image src="https://picsum.photos/seed/g3/1200/1200" alt="Gaze" aspectClass="aspect-square" categoryLabel="Portraits" class="reveal" />
            <app-gallery-image src="https://picsum.photos/seed/g4/1200/1800" alt="Silhouette" aspectClass="aspect-[4/6]" categoryLabel="Fashion" class="reveal delay-1" />
          </div>
          <div class="flex flex-col gap-8">
            <app-gallery-image src="https://picsum.photos/seed/g5/1200/1440" alt="Vows in Gold" aspectClass="aspect-[5/6]" categoryLabel="Weddings" class="reveal delay-2" />
            <app-gallery-image src="https://picsum.photos/seed/g6/1200/1200" alt="Minimalist Soul" aspectClass="aspect-square" categoryLabel="Lifestyle" class="reveal delay-3" />
          </div>
          <div class="flex flex-col gap-8 pt-0 lg:pt-32">
            <app-gallery-image src="https://picsum.photos/seed/g7/1200/2100" alt="Cinematic Depth" aspectClass="aspect-[4/7]" categoryLabel="Films" class="reveal delay-2" />
            <app-gallery-image src="https://picsum.photos/seed/g8/1200/800" alt="Echo of the City" aspectClass="aspect-[3/2]" categoryLabel="Travel" class="reveal delay-3" />
          </div>
        </div>

        @if (isExpanded()) {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 animate-fade-in-slow">
             <div class="flex flex-col gap-8"><app-gallery-image src="https://picsum.photos/seed/g9/1200/1200" alt="Stillness" aspectClass="aspect-square" categoryLabel="Still Life" /></div>
             <div class="flex flex-col gap-8 pt-0 lg:pt-8"><app-gallery-image src="https://picsum.photos/seed/g10/1200/1600" alt="Avant Garde" aspectClass="aspect-[3/4]" categoryLabel="Fashion" /></div>
             <div class="flex flex-col gap-8"><app-gallery-image src="https://picsum.photos/seed/g11/1600/900" alt="Panorama" aspectClass="aspect-[16/9]" categoryLabel="Editorial" /></div>
             <div class="flex flex-col gap-8 pt-0 lg:pt-8"><app-gallery-image src="https://picsum.photos/seed/g12/1200/1200" alt="Pathways" aspectClass="aspect-square" categoryLabel="Travel" /></div>
          </div>
        }

        <div class="flex justify-center mt-24 lg:mt-32">
          <button 
            (click)="toggleExpansion()"
            class="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#C6A96B] border border-[#C6A96B]/20 px-10 lg:px-14 py-5 lg:py-7 hover:bg-[#C6A96B] hover:text-black transition-all duration-700 relative overflow-hidden active:scale-95 shadow-xl shadow-black/20"
          >
            <span class="relative z-10">{{ isExpanded() ? 'Show Less' : 'Open Full Gallery' }}</span>
            <span 
              class="material-symbols-outlined text-sm transition-transform duration-700 relative z-10"
              [style.transform]="isExpanded() ? 'rotate(180deg)' : 'translateY(2px)'"
            >
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInSlow {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-slow {
      animation: fadeInSlow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  isExpanded = signal(false);
  toggleExpansion() { this.isExpanded.update(v => !v); }
}
