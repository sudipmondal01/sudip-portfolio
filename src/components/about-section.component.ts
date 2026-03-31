
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink],
  template: `
    <section class="py-40 px-6 lg:px-10 max-w-[1400px] mx-auto overflow-hidden">
      <!-- Section Header -->
      <div class="mb-32 reveal text-center flex flex-col items-center">
        <div class="flex items-center gap-4 mb-8">
          <span class="w-px h-6 bg-[#C6A96B]"></span>
          <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C6A96B] font-mono-tech">The Process</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-10 leading-tight">
          Crafting <span class="font-serif-italic text-[#C6A96B]">Art</span> Out of Moments
        </h2>
        <p class="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          Every project begins with a quiet understanding of a unique story and ends as a finished, timeless artwork curated to last generations.
        </p>
      </div>

      <!-- The Three Phases Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative">
        
        <!-- Phase 1: Discovery -->
        <div class="flex flex-col gap-10 reveal group">
          <div class="flex flex-col gap-4">
            <span class="text-5xl md:text-6xl font-serif-italic text-[#C6A96B]/10 group-hover:text-[#C6A96B]/30 transition-colors duration-700">01</span>
            <h3 class="text-2xl font-semibold tracking-tight">Discovery</h3>
          </div>
          <div class="w-12 h-px bg-[#C6A96B]/30 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          <p class="text-gray-400 text-base leading-relaxed font-light">
            Everything begins with connection. We dive into your vision through shared conversations, building the trust and intention needed to understand the pulse of your story before the first shutter clicks.
          </p>
        </div>

        <!-- Phase 2: The Experience -->
        <div class="flex flex-col gap-10 reveal delay-1 group">
          <div class="flex flex-col gap-4">
            <span class="text-5xl md:text-6xl font-serif-italic text-[#C6A96B]/10 group-hover:text-[#C6A96B]/30 transition-colors duration-700">02</span>
            <h3 class="text-2xl font-semibold tracking-tight">The Experience</h3>
          </div>
          <div class="w-12 h-px bg-[#C6A96B]/30 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          <p class="text-gray-400 text-base leading-relaxed font-light">
            The day is an experience, not a session. We prioritize flow over posing, creating a space of comfort where you can be fully present. This allows raw, authentic moments to unfold naturally in their own rhythm.
          </p>
        </div>

        <!-- Phase 3: The Final Artwork -->
        <div class="flex flex-col gap-10 reveal delay-2 group">
          <div class="flex flex-col gap-4">
            <span class="text-5xl md:text-6xl font-serif-italic text-[#C6A96B]/10 group-hover:text-[#C6A96B]/30 transition-colors duration-700">03</span>
            <h3 class="text-2xl font-semibold tracking-tight">The Final Artwork</h3>
          </div>
          <div class="w-12 h-px bg-[#C6A96B]/30 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          <p class="text-gray-400 text-base leading-relaxed font-light">
            Refining the echo of the day. Every frame is hand-curated and polished with a signature editorial touch. We focus on timeless quality over speed, ensuring each visual is a lasting piece of history.
          </p>
        </div>

      </div>

      <!-- Supporting Link -->
      <div class="mt-32 flex justify-center reveal delay-3">
        <a routerLink="/artist" class="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#C6A96B] hover:text-white transition-all duration-500">
          <span class="border-b border-[#C6A96B]/30 pb-1 group-hover:border-white transition-all">Deep Dive into my approach</span>
          <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSectionComponent {}
