
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-grid',
  imports: [RouterLink],
  template: `
    <section class="py-24 px-6 lg:px-10 max-w-[1400px] mx-auto reveal">
      <div class="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 bg-[#C6A96B]"></span>
            <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A96B] font-mono-tech">Curated Portfolio</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">Project Categories</h2>
        </div>
        <a routerLink="/archive" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors mt-8 md:mt-0">
          <span class="text-xs font-bold uppercase tracking-widest">Explore Full Archive</span>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
        </a>
      </div>

      <!-- Synchronized Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <!-- WEDDINGS -->
        <a [routerLink]="['/archive', 'WEDDINGS']" class="md:col-span-2 relative aspect-[16/10] overflow-hidden group border border-white/5">
          <img src="https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg?q=80&w=800&auto=format&fm=webp" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" 
               alt="Weddings"
               loading="lazy"
               decoding="async">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div class="absolute bottom-8 left-8">
            <span class="block w-px h-4 bg-[#C6A96B] mb-3"></span>
            <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.2em] mb-2 block font-mono-tech">Ceremony</span>
            <h3 class="text-3xl font-bold tracking-wide">Weddings</h3>
          </div>
        </a>

        <!-- EDITORIAL -->
        <a [routerLink]="['/archive', 'EDITORIAL']" class="relative aspect-[4/5] overflow-hidden group border border-white/5">
          <img src="https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714057/5O7A7282_tvvhs7.jpg?q=80&w=600&auto=format&fm=webp" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" alt="Editorial"
               loading="lazy"
               decoding="async">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8">
            <span class="text-[9px] font-bold text-[#C6A96B] uppercase tracking-[0.2em] mb-1 block">Artistic</span>
            <h3 class="text-xl font-bold tracking-wide">Editorial</h3>
          </div>
        </a>

        <!-- TRAVEL -->
        <a [routerLink]="['/archive', 'TRAVEL']" class="relative aspect-[4/5] overflow-hidden group border border-white/5">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop&fm=webp" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" alt="Travel"
               loading="lazy"
               decoding="async">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8">
            <span class="text-[9px] font-bold text-[#C6A96B] uppercase tracking-[0.2em] mb-1 block">Adventure</span>
            <h3 class="text-xl font-bold tracking-wide">Travel</h3>
          </div>
        </a>

        <!-- PRODUCTS -->
        <a [routerLink]="['/archive', 'PRODUCTS']" class="md:col-span-3 relative aspect-[12/4] overflow-hidden group border border-white/5">
          <img src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=1000&auto=format&fit=crop&fm=webp" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" alt="Products"
               loading="lazy"
               decoding="async">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div class="absolute bottom-10 left-10">
            <span class="block w-px h-4 bg-[#C6A96B] mb-3"></span>
            <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.2em] mb-2 block font-mono-tech">Commercial</span>
            <h3 class="text-4xl font-bold tracking-wide">Products</h3>
          </div>
        </a>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectGridComponent {}
