
import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryImageComponent } from './gallery.component';

interface ArchiveItem {
  id: number;
  category: string;
  src: string;
  alt: string;
  aspect: string;
}

@Component({
  selector: 'app-archive',
  imports: [GalleryImageComponent],
  template: `
    <section class="pt-40 pb-32 px-6 lg:px-10 min-h-screen">
      <!-- Header -->
      <div class="max-w-[1400px] mx-auto text-center mb-24 reveal">
        <span class="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C6A96B] mb-8 font-mono-tech block">Our Portfolio</span>
        <h1 class="text-6xl md:text-8xl font-serif-italic mb-12 tracking-tight">Archive of Stories</h1>
        <p class="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          A collection of captured moments, cinematic narratives, and editorial visions. Each frame is an intentional study of light, human emotion, and timeless beauty.
        </p>
      </div>

      <!-- Editorial Filter System -->
      <div class="max-w-[1400px] mx-auto mb-20 reveal delay-1">
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          @for (cat of categories; track cat) {
            <button 
              (click)="setFilter(cat)"
              class="relative text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 group py-2"
              [class.text-white]="activeFilter() === cat"
              [class.text-gray-500]="activeFilter() !== cat"
              [class.hover:text-white]="activeFilter() !== cat"
            >
              {{ cat }}
              <!-- Gold Indicator Underline -->
              <span 
                class="absolute -bottom-1 left-0 h-[2px] bg-[#C6A96B] transition-all duration-700 ease-in-out"
                [class.w-full]="activeFilter() === cat"
                [class.w-0]="activeFilter() !== cat"
                [class.group-hover:w-4]="activeFilter() !== cat"
              ></span>
            </button>
          }
        </div>
      </div>

      <!-- Smart Grid -->
      <div class="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 reveal delay-2 min-h-[600px]">
        @for (item of displayedItems(); track item.id) {
          <div class="animate-fade-in-staggered">
            <app-gallery-image 
              [src]="item.src" 
              [alt]="item.alt" 
              [aspectClass]="'aspect-[4/5]'" 
              [categoryLabel]="item.category"
            />
          </div>
        }
      </div>

      <!-- Functional Load More Button -->
      @if (hasMoreItems()) {
        <div class="flex flex-col items-center mt-32 reveal">
          <button 
            (click)="loadMore()"
            [disabled]="isLoading()"
            class="group flex items-center gap-6 px-16 py-6 border border-[#C6A96B]/30 text-[#C6A96B] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C6A96B] hover:text-black transition-all duration-700 disabled:opacity-50 disabled:cursor-wait"
          >
            @if (isLoading()) {
              Curating...
            } @else {
              Load More Work
              <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            }
          </button>
        </div>
      }

      <!-- Footer Branding -->
      <div class="flex flex-col items-center mt-40 reveal">
        <div class="mt-10 border-t border-white/5 w-full max-w-[400px] flex flex-col items-center pt-10">
          <div class="w-px h-20 bg-gradient-to-b from-[#C6A96B] to-transparent mb-12"></div>
          <div class="flex gap-12 text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500">
            <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.behance.net/sudip_mondal/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Behance</a>
          </div>
          <p class="mt-8 text-[8px] tracking-[0.5em] text-gray-600">© 2024 SUDIP MONDAL • VISUAL NARRATIVES</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInStaggered {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-staggered {
      animation: fadeInStaggered 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  activeFilter = signal('ALL');
  visibleCount = signal(9);
  isLoading = signal(false);
  
  categories = ['ALL', 'WEDDINGS', 'EDITORIAL', 'TRAVEL', 'PRODUCTS'];

  archiveItems: ArchiveItem[] = [
    { id: 1, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706685/IMG_5199_ys863k.jpg', alt: 'Wedding Moment 1', aspect: 'aspect-[4/5]' },
    { id: 2, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714081/5O7A7733_j3wir0.jpg', alt: 'Editorial Story 1', aspect: 'aspect-[4/5]' },
    { id: 3, category: 'PRODUCTS', src: 'https://picsum.photos/seed/arch3/1200/1500', alt: 'Perfume Bottle', aspect: 'aspect-[4/5]' },
    { id: 4, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5196_r2iawv.jpg', alt: 'Wedding Moment 2', aspect: 'aspect-[4/5]' },
    { id: 5, category: 'TRAVEL', src: 'https://picsum.photos/seed/arch5/1200/1500', alt: 'Lone Island', aspect: 'aspect-[4/5]' },
    { id: 6, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714078/5O7A7710_hzklov.jpg', alt: 'Editorial Story 2', aspect: 'aspect-[4/5]' },
    { id: 7, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg', alt: 'Wedding Moment 3', aspect: 'aspect-[4/5]' },
    { id: 8, category: 'PRODUCTS', src: 'https://picsum.photos/seed/arch8/1200/1500', alt: 'Product Shot', aspect: 'aspect-[4/5]' },
    { id: 9, category: 'TRAVEL', src: 'https://picsum.photos/seed/arch9/1200/1500', alt: 'City Architecture', aspect: 'aspect-[4/5]' },
    { id: 10, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5197_pspgv6.jpg', alt: 'Wedding Moment 4', aspect: 'aspect-[4/5]' },
    { id: 11, category: 'TRAVEL', src: 'https://picsum.photos/seed/arch11/1200/1500', alt: 'Mountain Vista', aspect: 'aspect-[4/5]' },
    { id: 12, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714064/5O7A7700_iygohc.jpg', alt: 'Editorial Story 3', aspect: 'aspect-[4/5]' },
    { id: 13, category: 'PRODUCTS', src: 'https://picsum.photos/seed/arch13/1200/1500', alt: 'Luxury Watch', aspect: 'aspect-[4/5]' },
    { id: 14, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714057/5O7A7282_tvvhs7.jpg', alt: 'Editorial Story 4', aspect: 'aspect-[4/5]' },
    { id: 15, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5198_u5z9lr.jpg', alt: 'Wedding Moment 5', aspect: 'aspect-[4/5]' },
    { id: 16, category: 'TRAVEL', src: 'https://picsum.photos/seed/arch16/1200/1500', alt: 'Coastal Escape', aspect: 'aspect-[4/5]' },
    { id: 17, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714056/5O7A7547_chujyf.jpg', alt: 'Editorial Story 5', aspect: 'aspect-[4/5]' },
    { id: 18, category: 'PRODUCTS', src: 'https://picsum.photos/seed/arch18/1200/1500', alt: 'Skincare Line', aspect: 'aspect-[4/5]' },
    { id: 19, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5194_-_Copy_tsp0ht.jpg', alt: 'Wedding Moment 6', aspect: 'aspect-[4/5]' },
    { id: 20, category: 'TRAVEL', src: 'https://picsum.photos/seed/arch20/1200/1500', alt: 'Desert Sands', aspect: 'aspect-[4/5]' },
    { id: 21, category: 'PRODUCTS', src: 'https://picsum.photos/seed/arch21/1200/1500', alt: 'Artisan Goods', aspect: 'aspect-[4/5]' },
    { id: 22, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714051/5O7A7484_n5msg7.jpg', alt: 'Editorial Story 6', aspect: 'aspect-[4/5]' },
    { id: 23, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714045/5O7A7675_hn1u2b.jpg', alt: 'Editorial Story 7', aspect: 'aspect-[4/5]' },
    { id: 24, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714014/5O7A7435_pkuxp7.jpg', alt: 'Editorial Story 8', aspect: 'aspect-[4/5]' },
    { id: 25, category: 'EDITORIAL', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714009/5O7A7285_byrzym.jpg', alt: 'Editorial Story 9', aspect: 'aspect-[4/5]' },
    { id: 26, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/IMG_5193_sgzsdx.jpg', alt: 'Wedding Moment 7', aspect: 'aspect-[4/5]' },
    { id: 27, category: 'WEDDINGS', src: 'https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A6852_iqtgvu.jpg', alt: 'Wedding Moment 8', aspect: 'aspect-[4/5]' },
  ];

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'ALL') return this.archiveItems;
    return this.archiveItems.filter(item => item.category === filter);
  });

  displayedItems = computed(() => {
    return this.filteredItems().slice(0, this.visibleCount());
  });

  hasMoreItems = computed(() => {
    return this.visibleCount() < this.filteredItems().length;
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cat = params['category']?.toUpperCase();
      const normalizedCat = cat === 'MODELS' ? 'EDITORIAL' : cat === 'PRODUCT' ? 'PRODUCTS' : cat;
      
      if (normalizedCat && this.categories.includes(normalizedCat)) {
        this.setFilter(normalizedCat);
      } else {
        this.setFilter('ALL');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  setFilter(category: string) {
    this.activeFilter.set(category);
    this.visibleCount.set(9);
  }

  async loadMore() {
    this.isLoading.set(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    this.visibleCount.update(n => n + 6);
    this.isLoading.set(false);
  }
}
