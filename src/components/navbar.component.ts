
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-out border-b border-white/0"
      [class.py-0]="isScrolled()"
      [class.bg-black/80]="isScrolled()"
      [class.backdrop-blur-2xl]="isScrolled()"
      [class.border-white/5]="isScrolled()"
      [class.py-4]="!isScrolled()"
    >
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 md:h-24 flex items-center justify-between">
        
        <!-- Logo -->
        <div class="flex items-center">
          <a routerLink="/" class="text-lg md:text-xl font-bold tracking-[0.3em] font-mono-tech hover:text-[#C6A96B] transition-all duration-500">
            SUDIP MONDAL
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-12">
          <a routerLink="/archive" routerLinkActive="text-[#C6A96B]" class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all duration-300 relative group">
            Archive
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C6A96B] group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
          <a routerLink="/films" routerLinkActive="text-[#C6A96B]" class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all duration-300 relative group">
            Films
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C6A96B] group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
          <a routerLink="/artist" routerLinkActive="text-white" class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all duration-300 relative group">
            The Artist
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C6A96B] group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
          <a routerLink="/connect" routerLinkActive="text-white" class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all duration-300 relative group">
            Connect
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C6A96B] group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
        </div>

        <!-- Right Action -->
        <div class="flex items-center gap-6">
          <div class="hidden lg:block w-px h-6 bg-white/10"></div>
          <button routerLink="/connect" class="px-8 py-3 bg-transparent border border-[#C6A96B]/30 text-[#C6A96B] text-[9px] font-bold uppercase tracking-[0.25em] hover:bg-[#C6A96B] hover:text-black transition-all duration-500 active:scale-95">
            Booking
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button (click)="toggleMenu()" class="xl:hidden text-white p-2 flex items-center justify-center border border-white/10 rounded-full w-12 h-12 z-[110]">
            <span class="material-symbols-outlined scale-110 transition-transform duration-500" [class.rotate-90]="isMenuOpen()">{{ isMenuOpen() ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (isMenuOpen()) {
        <div class="xl:hidden fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center animate-menu-fade">
           <div class="flex flex-col gap-12 items-center">
              <a routerLink="/archive" (click)="toggleMenu()" class="text-3xl font-light uppercase tracking-[0.5em] text-gray-400 hover:text-[#C6A96B] transition-all duration-700 animate-stagger-in" style="--delay: 0.1s">Archive</a>
              <a routerLink="/films" (click)="toggleMenu()" class="text-3xl font-light uppercase tracking-[0.5em] text-gray-400 hover:text-[#C6A96B] transition-all duration-700 animate-stagger-in" style="--delay: 0.2s">Films</a>
              <a routerLink="/artist" (click)="toggleMenu()" class="text-3xl font-light uppercase tracking-[0.5em] text-gray-400 hover:text-[#C6A96B] transition-all duration-700 animate-stagger-in" style="--delay: 0.3s">The Artist</a>
              <a routerLink="/connect" (click)="toggleMenu()" class="text-3xl font-light uppercase tracking-[0.5em] text-[#C6A96B] transition-all duration-700 animate-stagger-in" style="--delay: 0.4s">Connect</a>
          </div>
          
          <div class="mt-24 pt-10 border-t border-white/10 w-64 flex justify-between gap-4 animate-menu-fade delay-500">
             <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="text-[10px] text-gray-500 uppercase tracking-widest font-mono-tech hover:text-white transition-colors cursor-pointer">IG</a>
             <a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="text-[10px] text-gray-500 uppercase tracking-widest font-mono-tech hover:text-white transition-colors cursor-pointer">VM</a>
             <a href="https://www.behance.net/sudip_mondal/" target="_blank" rel="noopener noreferrer" class="text-[10px] text-gray-500 uppercase tracking-widest font-mono-tech hover:text-white transition-colors cursor-pointer">BE</a>
          </div>
        </div>
      }
    </nav>
  `,
  styles: [`
    @keyframes menuFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes staggerIn {
      from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
      to { opacity: 1; transform: translateY(0); filter: blur(0); }
    }
    .animate-menu-fade { animation: menuFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .animate-stagger-in { 
      opacity: 0;
      animation: staggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
      animation-delay: var(--delay);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
