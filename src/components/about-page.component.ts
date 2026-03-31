
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  template: `
    <article class="pt-32 lg:pt-48 pb-20 overflow-x-hidden">
      
      <!-- Section 1: The Artist Hero (Height Balanced) -->
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-40">
        <!-- items-stretch ensures columns match height -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-stretch min-h-[70vh]">
          
          <!-- Column 1: Featured Portrait -->
          <div class="lg:col-span-5 relative reveal flex">
            <div class="relative w-full h-full min-h-[600px] lg:min-h-0 bg-[#060608] border border-white/5 overflow-hidden group shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
                    class="w-full h-full object-cover grayscale transition-transform duration-[15s] group-hover:scale-105 group-hover:grayscale-0" alt="Sudip Mondal">
               
               <!-- Top Overlay -->
               <div class="absolute top-8 left-8 z-20">
                 <span class="text-[9px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech block mb-1">Artist Profile</span>
               </div>

               <!-- Bottom Overlay / Signature -->
               <div class="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-end">
                 <div>
                    <h3 class="text-xl font-serif-italic text-white mb-1">Sudip Mondal</h3>
                    <p class="text-[9px] text-gray-500 uppercase tracking-[0.3em]">Cinematographer & Curator</p>
                 </div>
                 <div class="hidden md:block">
                    <span class="text-[40px] font-serif-italic text-[#C6A96B]/20 select-none">S. Mondal</span>
                 </div>
               </div>

               <!-- Gradient Scrims -->
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
            </div>
            
            <!-- Decorative Offset Frame -->
            <div class="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C6A96B]/20 -z-10"></div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#C6A96B]/20 -z-10"></div>
          </div>

          <!-- Column 2: Story Text Content (Perfectly Height-Aligned with flex-col justify-between) -->
          <div class="lg:col-span-7 flex flex-col justify-between py-2 lg:h-full">
            
            <!-- Genesis -->
            <div class="reveal delay-1">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">01 / Genesis</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                The first shutter <br> clicked in <span class="font-serif-italic text-[#C6A96B]">2012.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                It wasn't just about freezing time. It was about translating the unspoken vibration of a moment into a visual echo. My journey began with a borrowed camera and a relentless curiosity for light.
              </p>
            </div>

            <!-- Evolution -->
            <div class="reveal delay-2 py-12 lg:py-0 border-y lg:border-none border-white/5 my-12 lg:my-0">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">02 / Evolution</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                Chasing shadows <br> across <span class="font-serif-italic text-[#C6A96B]">the world.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                From high-fashion runways to intimate coastal weddings, my lens has been a silent witness to raw human emotions. Every session is a collaborative discovery of truth.
              </p>
            </div>

            <!-- Signature -->
            <div class="reveal delay-3">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">03 / Signature</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                The art of <br> <span class="font-serif-italic text-[#C6A96B]">intentionality.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                I don't just take photos; I curate memories. My aesthetic is defined by cinematic contrast, editorial composition, and a deep respect for the subject's natural rhythm.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Section 2: Legacy in Numbers -->
      <section class="py-32 bg-[#060608] relative border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.6em] mb-4 block font-mono-tech">Proof of Craft</span>
          <h2 class="text-4xl md:text-5xl font-semibold tracking-tighter mb-20">LEGACY IN <span class="text-[#C6A96B]">NUMBERS</span></h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Stat 1 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">favorite</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">75+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Weddings</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">Luxury celebrations captured across the globe with cinematic precision.</p>
            </div>

            <!-- Stat 2 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">stadium</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">35+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Live Events</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">High-energy concerts and corporate galas where timing is everything.</p>
            </div>

            <!-- Stat 3 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">person</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">60+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Model Sessions</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">Editorial and fashion shoots defined by bold geometry and light play.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Behind the Lens (Process) -->
      <section class="py-40">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] mb-4 block font-mono-tech">The Process</span>
              <h2 class="text-5xl md:text-6xl font-semibold tracking-tighter">BEHIND THE <span class="text-[#C6A96B]">LENS</span></h2>
            </div>
            <div class="flex items-center gap-4 text-gray-600">
               <span class="text-[10px] uppercase tracking-widest font-mono-tech">Scroll to Explore</span>
               <div class="w-24 h-px bg-white/10"></div>
            </div>
          </div>

          <!-- Horizontal BTS Gallery -->
          <div class="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x">
             @for (item of btsItems; track item.id) {
               <div class="flex-shrink-0 w-[80vw] md:w-[450px] group snap-start">
                  <div class="aspect-square bg-white/5 overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-700">
                    <img [src]="item.src" [alt]="item.title" class="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110">
                    <div class="absolute bottom-4 right-4 text-[8px] font-mono-tech text-white/40 tracking-widest uppercase">
                       {{ item.meta }}
                    </div>
                  </div>
                  <div class="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono-tech text-gray-500 group-hover:text-white transition-colors">
                    <span>{{ item.id_label }}</span>
                    <span>{{ item.film }}</span>
                  </div>
               </div>
             }
          </div>
        </div>
      </section>

      <!-- Section 4: Final CTA -->
      <section class="py-40 border-t border-white/5">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 text-center flex flex-col items-center">
           <h2 class="text-6xl md:text-[140px] font-black leading-[0.9] tracking-tighter uppercase mb-12">
             <span class="block">Let's tell your</span>
             <span class="block text-transparent stroke-text">story next.</span>
           </h2>
           
           <div class="flex flex-wrap justify-center gap-8 items-center mt-12">
             <button routerLink="/connect" class="px-16 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-2xl shadow-[#C6A96B]/10 active:scale-95">
               Start a Project
             </button>
             <a routerLink="/archive" class="px-16 py-6 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all duration-500 active:scale-95">
               View Portfolio
             </a>
           </div>
        </div>
      </section>

    </article>
  `,
  styles: [`
    .stroke-text {
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.2);
    }
    @media (min-width: 1024px) {
      .stroke-text { -webkit-text-stroke: 3px rgba(255, 255, 255, 0.2); }
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {
  btsItems = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1492691523567-61723c275df1?q=80&w=2070&auto=format&fit=crop', 
      title: 'Studio Setup', 
      id_label: 'IMG_4821_RAW', 
      film: 'KODAK 400TX', 
      meta: '50mm • f/1.4' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop', 
      title: 'Field Session', 
      id_label: 'IMG_5032_RAW', 
      film: 'TRI-X PAN', 
      meta: '35mm • f/2.0' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=2064&auto=format&fit=crop', 
      title: 'Editorial Macro', 
      id_label: 'IMG_0123_RAW', 
      film: 'FUJI NEOPAN', 
      meta: '85mm • f/1.8' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1452721226468-f9c41fbd7d3a?q=80&w=1928&auto=format&fit=crop', 
      title: 'BTS Gear', 
      id_label: 'IMG_9944_RAW', 
      film: 'HP5 PLUS', 
      meta: '24mm • f/2.8' 
    }
  ];
}
