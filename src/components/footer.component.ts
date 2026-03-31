
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="pt-32 pb-16 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/5 pt-16">
        
        <!-- Brand Column -->
        <div class="md:col-span-4 flex flex-col gap-8">
          <div>
            <h2 class="text-3xl font-bold tracking-[0.2em] mb-3">SUDIP MONDAL</h2>
            <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 font-mono-tech">Cinematic & Editorial Photography</p>
          </div>
          
          <div class="flex gap-4 items-center">
            <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C6A96B] hover:border-[#C6A96B] transition-all" aria-label="Instagram">
               <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C6A96B] hover:border-[#C6A96B] transition-all" aria-label="Vimeo">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.93 21 10.97 21c-1.214 0-2.246-1.119-3.093-3.359-.557-2.053-1.119-4.107-1.68-6.159-.624-2.201-1.289-3.312-1.996-3.312-.155 0-.698.326-1.626.976l-.986-1.251c.959-.838 1.912-1.666 2.859-2.485 1.289-1.088 2.261-1.666 2.914-1.731 1.54-.147 2.491.906 2.85 3.16.403 2.536.682 4.108.837 4.71.365 1.529.752 2.295 1.156 2.295.31 0 .84-.551 1.586-1.654.744-1.099 1.147-1.93 1.213-2.492.124-1.18-.328-1.769-1.353-1.769-.465 0-.942.105-1.442.316 1.056-3.456 3.079-5.116 6.075-4.981 2.231.101 3.298 1.516 3.197 4.246z"></path></svg>
            </a>
            <a href="https://www.behance.net/sudip_mondal/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C6A96B] hover:border-[#C6A96B] transition-all" aria-label="Behance">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.502c.002.312-.012.618-.046.918h-4.458c.066.953.535 1.542 1.408 1.542.493 0 .895-.213 1.201-.641h1.722c-.22.693-.653 1.233-1.3 1.62-.647.387-1.385.58-2.215.58-1.127 0-2.03-.362-2.709-1.085-.679-.723-1.018-1.701-1.018-2.934 0-1.25.334-2.23 1.002-2.938.669-.709 1.517-1.063 2.544-1.063.993 0 1.8.344 2.42 1.033.621.689.923 1.677.907 2.966zm-4.484-1.306h2.72c-.046-.723-.396-1.141-1.049-1.141-.652 0-1.053.33-1.671 1.141zm-10.232-2.319h3.765c.661 0 1.18.148 1.558.444.378.297.567.708.567 1.233 0 .427-.123.774-.369 1.042-.246.267-.585.451-1.018.552.54.093.955.304 1.246.634.29.33.436.756.436 1.278 0 .61-.22 1.084-.66 1.423-.44.339-1.048.508-1.824.508h-4.364v-8.114zm1.863 1.564v1.855h1.745c.787 0 1.18-.309 1.18-.927 0-.619-.393-.928-1.18-.928h-1.745zm0 3.42v1.564h1.964c.854 0 1.282-.361 1.282-1.084 0-.723-.428-1.084-1.282-1.084h-1.964zm1.905-6.908h3.333v.952h-3.333v-.952z"></path></svg>
            </a>
          </div>
        </div>

        <!-- Sitemap Columns -->
        <div class="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
          
          <!-- Column 1: Navigation -->
          <div class="flex flex-col gap-6">
            <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6A96B] font-mono-tech">Navigation</h4>
            <ul class="flex flex-col gap-4">
              <li><a routerLink="/" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Home</a></li>
              <li><a routerLink="/films" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Films</a></li>
              <li><a routerLink="/archive" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Archive</a></li>
              <li><a routerLink="/artist" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">The Artist</a></li>
              <li><a routerLink="/connect" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Connect</a></li>
            </ul>
          </div>

          <!-- Column 2: Archive Categories -->
          <div class="flex flex-col gap-6">
            <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6A96B] font-mono-tech">Featured</h4>
            <ul class="flex flex-col gap-4">
              <li><a [routerLink]="['/archive', 'WEDDINGS']" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Weddings</a></li>
              <li><a [routerLink]="['/archive', 'EVENTS']" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Luxury Events</a></li>
              <li><a [routerLink]="['/archive', 'MODELS']" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Editorial</a></li>
              <li><a [routerLink]="['/archive', 'PRODUCT']" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Commercial</a></li>
              <li><a [routerLink]="['/archive', 'TRAVEL']" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Lifestyle</a></li>
            </ul>
          </div>

          <!-- Column 3: Legal & Copyright -->
          <div class="flex flex-col gap-6 sm:items-end sm:text-right">
            <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6A96B] font-mono-tech">Connect</h4>
            <ul class="flex flex-col gap-4 mb-10">
              <li><a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Instagram</a></li>
              <li><a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Vimeo</a></li>
              <li><a href="https://www.behance.net/sudip_mondal/" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-white transition-colors tracking-wide">Behance</a></li>
            </ul>
             <div class="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-600 leading-relaxed font-mono-tech">
               © 2024 SUDIP MONDAL.<br>
               DESIGNED WITH PRECISION.
             </div>
          </div>
        </div>

      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
