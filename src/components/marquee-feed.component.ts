
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-marquee-feed',
  template: `
    <div class="relative py-0 bg-black overflow-hidden group border-t border-white/5 whitespace-nowrap">
      <!-- Continuous Scroll Container: Forced horizontal with flex-row and flex-nowrap -->
      <div class="animate-marquee-infinite flex flex-row flex-nowrap w-fit">
        <!-- First Set -->
        @for (item of feedItems; track item.id) {
          <div class="relative flex-shrink-0 w-[280px] md:w-[20vw] aspect-square overflow-hidden group/item border-r border-white/5">
            <img [src]="item.url" 
                 class="w-full h-full object-cover grayscale brightness-[0.4] group-hover/item:brightness-100 group-hover/item:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover/item:scale-100" 
                 [alt]="'Social feed ' + item.id">
            
            <!-- Centered Camera Icon -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-60 group-hover/item:opacity-100 group-hover/item:scale-110 group-hover/item:bg-[#C6A96B]/20 group-hover/item:border-[#C6A96B]/40 transition-all duration-700">
                <span class="material-symbols-outlined text-white group-hover/item:text-[#C6A96B] text-2xl">add_a_photo</span>
              </div>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>
        }
        
        <!-- Duplicated Set for Seamless Loop -->
        @for (item of feedItems; track 'dup-' + item.id) {
          <div class="relative flex-shrink-0 w-[280px] md:w-[20vw] aspect-square overflow-hidden group/item border-r border-white/5">
            <img [src]="item.url" 
                 class="w-full h-full object-cover grayscale brightness-[0.4] group-hover/item:brightness-100 group-hover/item:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover/item:scale-100" 
                 [alt]="'Social feed duplicate ' + item.id">
            
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-60 group-hover/item:opacity-100 group-hover/item:scale-110 group-hover/item:bg-[#C6A96B]/20 group-hover/item:border-[#C6A96B]/40 transition-all duration-700">
                <span class="material-symbols-outlined text-white group-hover/item:text-[#C6A96B] text-2xl">add_a_photo</span>
              </div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>
        }
      </div>

      <!-- Gradient masks on sides for extra cinematic feel -->
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee-infinite {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: fit-content;
      animation: marquee 40s linear infinite;
      will-change: transform;
    }

    .animate-marquee-infinite:hover {
      animation-play-state: paused;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarqueeFeedComponent {
  feedItems = [
    { id: 1, url: 'https://picsum.photos/seed/f1/800/800' },
    { id: 2, url: 'https://picsum.photos/seed/f2/800/800' },
    { id: 3, url: 'https://picsum.photos/seed/f3/800/800' },
    { id: 4, url: 'https://picsum.photos/seed/f4/800/800' },
    { id: 5, url: 'https://picsum.photos/seed/f5/800/800' },
    { id: 6, url: 'https://picsum.photos/seed/f6/800/800' }
  ];
}
