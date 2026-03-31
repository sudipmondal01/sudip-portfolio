
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink],
  template: `
    <section class="py-40 relative overflow-hidden bg-[#040406] border-t border-white/5">
      <div class="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-0"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A96B]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center reveal">
        <div class="w-24 h-24 rounded-full bg-[#C6A96B]/5 border border-[#C6A96B]/20 flex items-center justify-center mb-12 relative group">
          <div class="absolute inset-0 rounded-full border border-[#C6A96B]/40 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
          <span class="material-symbols-outlined text-[#C6A96B] text-4xl animate-spin-slow">shutter_speed</span>
        </div>
        
        <h2 class="text-5xl md:text-8xl font-medium leading-[1.1] tracking-tighter text-white mb-10">
          Ready to tell <br class="hidden md:block"> <span class="font-serif-italic text-[#C6A96B]">your</span> story?
        </h2>
        
        <p class="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl leading-relaxed">
          Available Worldwide for Weddings, Commercial projects and Editorial assignments. Let's create something timeless.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
          <button routerLink="/connect" class="flex-1 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 shadow-[0_10px_40px_rgba(198,169,107,0.15)] active:scale-[0.98]">
            Book a Consultation
          </button>
          <button routerLink="/connect" class="flex-1 py-6 bg-transparent border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:border-white hover:bg-white/5 transition-all duration-500 active:scale-[0.98]">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaSectionComponent {}
