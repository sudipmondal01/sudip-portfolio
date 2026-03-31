
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-films-page',
  imports: [RouterLink],
  template: `
    <article class="bg-[#040406] overflow-x-hidden min-h-screen">
      <!-- Cinematic Hero -->
      <section class="relative h-screen w-full flex items-end pb-24 px-6 md:px-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img 
            alt="The Venetian Vow Hero" 
            class="w-full h-full object-cover animate-scale-slow" 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/30 to-transparent"></div>
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div class="relative z-10 max-w-4xl reveal">
          <p class="text-[#C6A96B] tracking-[0.5em] uppercase text-[10px] mb-6 font-bold font-mono-tech">Featured Narrative</p>
          <h1 class="text-6xl md:text-9xl font-serif-italic mb-12 leading-[0.9] text-shadow-lg text-[#C6A96B]">The Venetian Vow</h1>
          
          <div class="flex flex-wrap items-center gap-10">
            <button 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group flex items-center gap-6 border border-[#C6A96B]/50 px-10 py-5 rounded-full hover:bg-[#C6A96B] hover:text-black transition-all duration-700 active:scale-95"
            >
              <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">play_arrow</span>
              <span class="uppercase tracking-[0.3em] text-[10px] font-bold font-mono-tech">Watch Film</span>
            </button>
            <div class="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase opacity-60 font-mono-tech">
              <span>Venice, Italy</span>
              <span class="w-1 h-1 bg-[#C6A96B] rounded-full"></span>
              <span>4K Cinema</span>
            </div>
          </div>
        </div>

        <div class="absolute bottom-12 right-10 md:right-20 hidden md:flex flex-col items-center gap-6">
          <span class="text-[9px] uppercase tracking-[0.5em] opacity-40 rotate-90 origin-right translate-y-12 font-mono-tech">Scroll</span>
          <div class="w-[1px] h-24 bg-gradient-to-t from-[#C6A96B] to-transparent"></div>
        </div>
      </section>

      <main class="relative z-10 px-6 md:px-20 py-32 space-y-48">
        
        <!-- Wedding Narratives -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Wedding Narratives</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">High-end destination cinematography</p>
            </div>
            <a routerLink="/archive/WEDDINGS" class="text-[10px] uppercase tracking-[0.3em] text-[#C6A96B] hover:text-white transition-colors font-bold border-b border-[#C6A96B]/30 pb-1 mt-8 md:mt-0">View All</a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Film Card 1 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden bg-[#040406] border border-white/5 cursor-pointer"
            >
              <div class="aspect-[2.35/1] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lake Como Film" 
                  class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <div class="w-16 h-16 rounded-full border border-[#C6A96B]/30 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all">
                  <span class="material-symbols-outlined text-[#C6A96B] text-4xl">play_arrow</span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[#C6A96B] text-[9px] tracking-[0.4em] uppercase mb-3 block font-mono-tech">Lake Como, Italy</span>
                    <h3 class="text-3xl font-serif-italic">Ethereal Elegance</h3>
                    <p class="text-sm text-gray-400 mt-4 font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000">A poetic journey through the misty mornings and golden sunsets of the Italian lakes.</p>
                  </div>
                  <span class="text-[9px] tracking-[0.3em] opacity-40 font-mono-tech">04:22</span>
                </div>
              </div>
            </div>

            <!-- Film Card 2 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden bg-[#040406] border border-white/5 cursor-pointer"
            >
              <div class="aspect-[2.35/1] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea4e73ad94d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dubai Film" 
                  class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <div class="w-16 h-16 rounded-full border border-[#C6A96B]/30 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all">
                  <span class="material-symbols-outlined text-[#C6A96B] text-4xl">play_arrow</span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[#C6A96B] text-[9px] tracking-[0.4em] uppercase mb-3 block font-mono-tech">Dubai, UAE</span>
                    <h3 class="text-3xl font-serif-italic">Desert Mirage</h3>
                    <p class="text-sm text-gray-400 mt-4 font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000">A grand celebration of love amidst the architectural wonders of the desert city.</p>
                  </div>
                  <span class="text-[9px] tracking-[0.3em] opacity-40 font-mono-tech">05:45</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Moodfilms -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Moodfilms</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">Fashion & Aesthetic Visuals</p>
            </div>
            <a href="#" class="text-[10px] uppercase tracking-[0.3em] text-[#C6A96B] hover:text-white transition-colors font-bold border-b border-[#C6A96B]/30 pb-1 mt-8 md:mt-0">Explore Reels</a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Vertical Reel 1 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Noir Soul</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Editorial Mood</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>

            <!-- Vertical Reel 2 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer md:mt-16"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Golden Hour</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Vogue Feature</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>

            <!-- Vertical Reel 3 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Urban Echo</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Street Avant-Garde</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Commercial Stories -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Commercial Stories</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">Brand Narratives & Commercials</p>
            </div>
          </div>

          <div 
            (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
            class="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 bg-[#040406]"
          >
            <div class="aspect-[21/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop" 
                alt="Aura Watches Commercial" 
                class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-out"
              >
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-10">
              <span class="text-[#C6A96B] tracking-[0.5em] uppercase text-[10px] mb-6 font-mono-tech">Aura Watches</span>
              <h3 class="text-4xl md:text-7xl font-serif-italic mb-8">The Passage of Time</h3>
              <div class="h-[1px] w-32 bg-[#C6A96B] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
              <p class="max-w-xl mt-8 text-gray-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover:translate-y-0">
                Global campaign showcasing the precision and legacy of Aura's Heritage collection. A visual symphony of mechanics and motion.
              </p>
            </div>
            <!-- Play Indicator -->
             <div class="absolute top-10 right-10">
               <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C6A96B] transition-colors">
                 <span class="material-symbols-outlined text-white group-hover:text-[#C6A96B] transition-colors">play_arrow</span>
               </div>
             </div>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="py-24 text-center reveal">
          <h2 class="text-5xl md:text-7xl font-serif-italic text-[#C6A96B] mb-12">Let's craft your narrative.</h2>
          <p class="max-w-2xl mx-auto text-[10px] opacity-40 tracking-[0.5em] uppercase mb-16 font-mono-tech font-bold">Now accepting bookings for 2025 worldwide.</p>
          <button routerLink="/connect" class="group relative px-16 py-7 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.4em] font-mono-tech hover:bg-white transition-all duration-700 active:scale-95">
            Inquire Now
            <span class="material-symbols-outlined ml-4 align-middle text-sm group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </button>
        </section>

      </main>

      <!-- Video Modal Overlay (Refined) -->
      @if (activeVideo()) {
        <div 
          class="fixed inset-0 z-[2000] flex items-center justify-center bg-[#040406]/90 backdrop-blur-xl animate-fade-in"
          (click)="closeVideo()"
        >
          <!-- Enhanced Close Button -->
          <button 
            (click)="closeVideo()"
            class="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-center gap-2 group z-[2100]"
            aria-label="Close video player"
          >
            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#C6A96B]/50 transition-all duration-500">
              <span class="material-symbols-outlined text-white group-hover:text-[#C6A96B] text-3xl">close</span>
            </div>
            <span class="text-[8px] font-mono-tech uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Close (Esc)</span>
          </button>

          <!-- Video Container (Refined) -->
          <div 
            class="relative w-[92%] max-w-6xl aspect-video bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,1),0_0_80px_rgba(198,169,107,0.05)] animate-lightbox"
            (click)="$event.stopPropagation()"
          >
            <iframe 
              [src]="activeVideo()" 
              class="w-full h-full border-none"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen
            ></iframe>

            <!-- Status Indicator -->
            <div class="absolute -bottom-8 left-0 flex items-center gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#C6A96B] animate-pulse"></div>
              <span class="text-[9px] font-mono-tech uppercase tracking-[0.3em] text-white/50">Cinematic Stream Active • 4K</span>
            </div>
          </div>
        </div>
      }
    </article>
  `,
  styles: [`
    .text-shadow-lg {
      text-shadow: 0 10px 40px rgba(0,0,0,0.8);
    }
    @keyframes scaleSlow {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }
    .animate-scale-slow {
      animation: scaleSlow 20s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    @keyframes lightboxIn {
      from { opacity: 0; transform: scale(0.96) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-lightbox {
      animation: lightboxIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown.escape)': 'closeVideo()'
  }
})
export class FilmsPageComponent {
  private sanitizer = inject(DomSanitizer);
  activeVideo = signal<SafeResourceUrl | null>(null);

  openVideo(url: string) {
    this.activeVideo.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
    document.body.style.overflow = 'hidden';
  }

  closeVideo() {
    this.activeVideo.set(null);
    document.body.style.overflow = '';
  }
}
