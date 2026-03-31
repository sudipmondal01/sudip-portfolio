import {
  GalleryImageComponent
} from "./chunk-NXF5HAGQ.js";
import {
  ActivatedRoute
} from "./chunk-GA6UZJ6P.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-N32WVGY5.js";

// src/components/archive.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ArchiveComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ArchiveComponent_For_11_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(cat_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-white", ctx_r2.activeFilter() === cat_r2)("text-gray-500", ctx_r2.activeFilter() !== cat_r2)("hover:text-white", ctx_r2.activeFilter() !== cat_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("w-full", ctx_r2.activeFilter() === cat_r2)("w-0", ctx_r2.activeFilter() !== cat_r2)("group-hover:w-4", ctx_r2.activeFilter() !== cat_r2);
  }
}
function ArchiveComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-gallery-image", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.src)("alt", item_r4.alt)("aspectClass", "aspect-[4/5]")("categoryLabel", item_r4.category);
  }
}
function ArchiveComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Curating... ");
  }
}
function ArchiveComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Load More Work ");
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2, "arrow_right_alt");
    \u0275\u0275elementEnd();
  }
}
function ArchiveComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 21);
    \u0275\u0275listener("click", function ArchiveComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275conditionalCreate(2, ArchiveComponent_Conditional_15_Conditional_2_Template, 1, 0)(3, ArchiveComponent_Conditional_15_Conditional_3_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoading() ? 2 : 3);
  }
}
var ArchiveComponent = class _ArchiveComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.activeFilter = signal("ALL", ...ngDevMode ? [{ debugName: "activeFilter" }] : []);
    this.visibleCount = signal(9, ...ngDevMode ? [{ debugName: "visibleCount" }] : []);
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.categories = ["ALL", "WEDDINGS", "EDITORIAL", "TRAVEL", "PRODUCTS"];
    this.archiveItems = [
      { id: 1, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706685/IMG_5199_ys863k.jpg", alt: "Wedding Moment 1", aspect: "aspect-[4/5]" },
      { id: 2, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714081/5O7A7733_j3wir0.jpg", alt: "Editorial Story 1", aspect: "aspect-[4/5]" },
      { id: 3, category: "PRODUCTS", src: "https://picsum.photos/seed/arch3/1200/1500", alt: "Perfume Bottle", aspect: "aspect-[4/5]" },
      { id: 4, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5196_r2iawv.jpg", alt: "Wedding Moment 2", aspect: "aspect-[4/5]" },
      { id: 5, category: "TRAVEL", src: "https://picsum.photos/seed/arch5/1200/1500", alt: "Lone Island", aspect: "aspect-[4/5]" },
      { id: 6, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714078/5O7A7710_hzklov.jpg", alt: "Editorial Story 2", aspect: "aspect-[4/5]" },
      { id: 7, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg", alt: "Wedding Moment 3", aspect: "aspect-[4/5]" },
      { id: 8, category: "PRODUCTS", src: "https://picsum.photos/seed/arch8/1200/1500", alt: "Product Shot", aspect: "aspect-[4/5]" },
      { id: 9, category: "TRAVEL", src: "https://picsum.photos/seed/arch9/1200/1500", alt: "City Architecture", aspect: "aspect-[4/5]" },
      { id: 10, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5197_pspgv6.jpg", alt: "Wedding Moment 4", aspect: "aspect-[4/5]" },
      { id: 11, category: "TRAVEL", src: "https://picsum.photos/seed/arch11/1200/1500", alt: "Mountain Vista", aspect: "aspect-[4/5]" },
      { id: 12, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714064/5O7A7700_iygohc.jpg", alt: "Editorial Story 3", aspect: "aspect-[4/5]" },
      { id: 13, category: "PRODUCTS", src: "https://picsum.photos/seed/arch13/1200/1500", alt: "Luxury Watch", aspect: "aspect-[4/5]" },
      { id: 14, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714057/5O7A7282_tvvhs7.jpg", alt: "Editorial Story 4", aspect: "aspect-[4/5]" },
      { id: 15, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/IMG_5198_u5z9lr.jpg", alt: "Wedding Moment 5", aspect: "aspect-[4/5]" },
      { id: 16, category: "TRAVEL", src: "https://picsum.photos/seed/arch16/1200/1500", alt: "Coastal Escape", aspect: "aspect-[4/5]" },
      { id: 17, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714056/5O7A7547_chujyf.jpg", alt: "Editorial Story 5", aspect: "aspect-[4/5]" },
      { id: 18, category: "PRODUCTS", src: "https://picsum.photos/seed/arch18/1200/1500", alt: "Skincare Line", aspect: "aspect-[4/5]" },
      { id: 19, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5194_-_Copy_tsp0ht.jpg", alt: "Wedding Moment 6", aspect: "aspect-[4/5]" },
      { id: 20, category: "TRAVEL", src: "https://picsum.photos/seed/arch20/1200/1500", alt: "Desert Sands", aspect: "aspect-[4/5]" },
      { id: 21, category: "PRODUCTS", src: "https://picsum.photos/seed/arch21/1200/1500", alt: "Artisan Goods", aspect: "aspect-[4/5]" },
      { id: 22, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714051/5O7A7484_n5msg7.jpg", alt: "Editorial Story 6", aspect: "aspect-[4/5]" },
      { id: 23, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714045/5O7A7675_hn1u2b.jpg", alt: "Editorial Story 7", aspect: "aspect-[4/5]" },
      { id: 24, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714014/5O7A7435_pkuxp7.jpg", alt: "Editorial Story 8", aspect: "aspect-[4/5]" },
      { id: 25, category: "EDITORIAL", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714009/5O7A7285_byrzym.jpg", alt: "Editorial Story 9", aspect: "aspect-[4/5]" },
      { id: 26, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/IMG_5193_sgzsdx.jpg", alt: "Wedding Moment 7", aspect: "aspect-[4/5]" },
      { id: 27, category: "WEDDINGS", src: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A6852_iqtgvu.jpg", alt: "Wedding Moment 8", aspect: "aspect-[4/5]" }
    ];
    this.filteredItems = computed(() => {
      const filter = this.activeFilter();
      if (filter === "ALL")
        return this.archiveItems;
      return this.archiveItems.filter((item) => item.category === filter);
    }, ...ngDevMode ? [{ debugName: "filteredItems" }] : []);
    this.displayedItems = computed(() => {
      return this.filteredItems().slice(0, this.visibleCount());
    }, ...ngDevMode ? [{ debugName: "displayedItems" }] : []);
    this.hasMoreItems = computed(() => {
      return this.visibleCount() < this.filteredItems().length;
    }, ...ngDevMode ? [{ debugName: "hasMoreItems" }] : []);
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const cat = params["category"]?.toUpperCase();
      const normalizedCat = cat === "MODELS" ? "EDITORIAL" : cat === "PRODUCT" ? "PRODUCTS" : cat;
      if (normalizedCat && this.categories.includes(normalizedCat)) {
        this.setFilter(normalizedCat);
      } else {
        this.setFilter("ALL");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  setFilter(category) {
    this.activeFilter.set(category);
    this.visibleCount.set(9);
  }
  async loadMore() {
    this.isLoading.set(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    this.visibleCount.update((n) => n + 6);
    this.isLoading.set(false);
  }
  static {
    this.\u0275fac = function ArchiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArchiveComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArchiveComponent, selectors: [["app-archive"]], decls: 26, vars: 1, consts: [[1, "pt-40", "pb-32", "px-6", "lg:px-10", "min-h-screen"], [1, "max-w-[1400px]", "mx-auto", "text-center", "mb-24", "reveal"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.6em]", "text-[#C6A96B]", "mb-8", "font-mono-tech", "block"], [1, "text-6xl", "md:text-8xl", "font-serif-italic", "mb-12", "tracking-tight"], [1, "text-gray-500", "max-w-2xl", "mx-auto", "font-light", "text-lg", "leading-relaxed"], [1, "max-w-[1400px]", "mx-auto", "mb-20", "reveal", "delay-1"], [1, "flex", "flex-wrap", "justify-center", "items-center", "gap-x-12", "gap-y-6"], [1, "relative", "text-[10px]", "font-bold", "uppercase", "tracking-[0.4em]", "transition-all", "duration-500", "group", "py-2", 3, "text-white", "text-gray-500", "hover:text-white"], [1, "max-w-[1400px]", "mx-auto", "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-10", "reveal", "delay-2", "min-h-[600px]"], [1, "animate-fade-in-staggered"], [1, "flex", "flex-col", "items-center", "mt-32", "reveal"], [1, "flex", "flex-col", "items-center", "mt-40", "reveal"], [1, "mt-10", "border-t", "border-white/5", "w-full", "max-w-[400px]", "flex", "flex-col", "items-center", "pt-10"], [1, "w-px", "h-20", "bg-gradient-to-b", "from-[#C6A96B]", "to-transparent", "mb-12"], [1, "flex", "gap-12", "text-[9px]", "font-bold", "uppercase", "tracking-[0.4em]", "text-gray-500"], ["href", "https://www.instagram.com/bunnyxdneo/", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-white", "transition-colors"], ["href", "https://www.behance.net/sudip_mondal/", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-white", "transition-colors"], [1, "mt-8", "text-[8px]", "tracking-[0.5em]", "text-gray-600"], [1, "relative", "text-[10px]", "font-bold", "uppercase", "tracking-[0.4em]", "transition-all", "duration-500", "group", "py-2", 3, "click"], [1, "absolute", "-bottom-1", "left-0", "h-[2px]", "bg-[#C6A96B]", "transition-all", "duration-700", "ease-in-out"], [3, "src", "alt", "aspectClass", "categoryLabel"], [1, "group", "flex", "items-center", "gap-6", "px-16", "py-6", "border", "border-[#C6A96B]/30", "text-[#C6A96B]", "text-[10px]", "font-bold", "uppercase", "tracking-[0.3em]", "hover:bg-[#C6A96B]", "hover:text-black", "transition-all", "duration-700", "disabled:opacity-50", "disabled:cursor-wait", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm", "transition-transform", "group-hover:translate-x-2"]], template: function ArchiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Our Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "Archive of Stories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " A collection of captured moments, cinematic narratives, and editorial visions. Each frame is an intentional study of light, human emotion, and timeless beauty. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
        \u0275\u0275repeaterCreate(10, ArchiveComponent_For_11_Template, 3, 13, "button", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275repeaterCreate(13, ArchiveComponent_For_14_Template, 2, 4, "div", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, ArchiveComponent_Conditional_15_Template, 4, 2, "div", 10);
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
        \u0275\u0275element(18, "div", 13);
        \u0275\u0275elementStart(19, "div", 14)(20, "a", 15);
        \u0275\u0275text(21, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 16);
        \u0275\u0275text(23, "Behance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "p", 17);
        \u0275\u0275text(25, "\xA9 2024 SUDIP MONDAL \u2022 VISUAL NARRATIVES");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.displayedItems());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasMoreItems() ? 15 : -1);
      }
    }, dependencies: [GalleryImageComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeInStaggered {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in-staggered[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInStaggered 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=archive.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchiveComponent, [{
    type: Component,
    args: [{ selector: "app-archive", imports: [GalleryImageComponent], template: `
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
          <p class="mt-8 text-[8px] tracking-[0.5em] text-gray-600">\xA9 2024 SUDIP MONDAL \u2022 VISUAL NARRATIVES</p>
        </div>
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;bb0f3087a3e818ac24fb792259c8bbfbdda7f445ba0d16edba8c6194ab24484f;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/archive.component.ts */\n@keyframes fadeInStaggered {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in-staggered {\n  animation: fadeInStaggered 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=archive.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArchiveComponent, { className: "ArchiveComponent", filePath: "src/components/archive.component.ts", lineNumber: 108 });
})();
export {
  ArchiveComponent
};
//# sourceMappingURL=chunk-E5VK73BU.js.map
