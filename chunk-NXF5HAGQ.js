import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N32WVGY5.js";

// src/components/gallery.component.ts
function GalleryImageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.categoryLabel());
  }
}
function GalleryImageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domListener("click", function GalleryImageComponent_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275domElementStart(1, "button", 8);
    \u0275\u0275domListener("click", function GalleryImageComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275domElementStart(2, "span", 9);
    \u0275\u0275text(3, "close");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 10);
    \u0275\u0275domListener("click", function GalleryImageComponent_Conditional_7_Template_div_click_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElement(5, "img", 11);
    \u0275\u0275domElementStart(6, "div", 12)(7, "div", 13)(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "h3", 15);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "p", 16);
    \u0275\u0275text(13, "Digital Archive");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("src", ctx_r0.src(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.alt());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.categoryLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alt());
  }
}
function GalleryComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 8);
    \u0275\u0275element(2, "app-gallery-image", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275element(4, "app-gallery-image", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275element(6, "app-gallery-image", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275element(8, "app-gallery-image", 27);
    \u0275\u0275elementEnd()();
  }
}
var GalleryImageComponent = class _GalleryImageComponent {
  constructor() {
    this.src = input.required(...ngDevMode ? [{ debugName: "src" }] : []);
    this.alt = input.required(...ngDevMode ? [{ debugName: "alt" }] : []);
    this.aspectClass = input("aspect-square", ...ngDevMode ? [{ debugName: "aspectClass" }] : []);
    this.categoryLabel = input("", ...ngDevMode ? [{ debugName: "categoryLabel" }] : []);
    this.isLoaded = signal(false, ...ngDevMode ? [{ debugName: "isLoaded" }] : []);
    this.isLightboxOpen = signal(false, ...ngDevMode ? [{ debugName: "isLightboxOpen" }] : []);
    this.lowResUrl = () => {
      const s = this.src();
      if (s.includes("picsum.photos") && s.includes("seed")) {
        const parts = s.split("/");
        const seedIndex = parts.indexOf("seed") + 1;
        const seed = parts[seedIndex];
        return `https://picsum.photos/seed/${seed}/20/20`;
      }
      return s;
    };
  }
  openLightbox() {
    this.isLightboxOpen.set(true);
    document.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.isLightboxOpen.set(false);
    document.body.style.overflow = "";
  }
  onEsc() {
    if (this.isLightboxOpen())
      this.closeLightbox();
  }
  static {
    this.\u0275fac = function GalleryImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryImageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryImageComponent, selectors: [["app-gallery-image"]], hostBindings: function GalleryImageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function GalleryImageComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEsc();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { src: [1, "src"], alt: [1, "alt"], aspectClass: [1, "aspectClass"], categoryLabel: [1, "categoryLabel"] }, decls: 8, vars: 15, consts: [[1, "group", "relative", "overflow-hidden", "bg-white/5", "w-full", "h-full", "cursor-pointer", 3, "click"], ["alt", "", 1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "blur-2xl", "scale-110", "opacity-50", "transition-opacity", "duration-1000", 3, "src"], ["loading", "lazy", "decoding", "async", 1, "relative", "w-full", "h-full", "object-cover", "grayscale", "transition-all", "duration-1000", "ease-out", "group-hover:grayscale-0", "group-hover:scale-[1.03]", 3, "load", "src", "alt"], [1, "absolute", "inset-0", "bg-black/60", "opacity-0", "group-hover:opacity-100", "transition-all", "duration-700", "flex", "flex-col", "items-center", "justify-center", "z-10"], [1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.4em]", "text-[#C6A96B]", "mb-2", "transform", "translate-y-2", "group-hover:translate-y-0", "transition-transform", "duration-500"], [1, "text-[10px]", "font-medium", "uppercase", "tracking-[0.2em]", "text-white", "border-b", "border-white/20", "pb-1", "transform", "translate-y-2", "group-hover:translate-y-0", "transition-transform", "duration-700", "delay-75"], [1, "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "p-4", "lg:p-20", "bg-black/98", "backdrop-blur-3xl", "animate-fade-in"], [1, "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "p-4", "lg:p-20", "bg-black/98", "backdrop-blur-3xl", "animate-fade-in", 3, "click"], ["aria-label", "Close Lightbox", 1, "absolute", "top-6", "right-6", "lg:top-10", "lg:right-10", "text-white", "opacity-40", "hover:opacity-100", "transition-opacity", "z-[1010]", "p-4", 3, "click"], [1, "material-symbols-outlined", "text-4xl"], [1, "relative", "max-w-7xl", "max-h-full", "w-full", "h-full", "flex", "items-center", "justify-center", "animate-lightbox", 3, "click"], [1, "max-w-full", "max-h-full", "object-contain", "shadow-[0_40px_100px_rgba(0,0,0,0.8)]", "border", "border-white/5", 3, "src", "alt"], [1, "absolute", "bottom-0", "left-0", "w-full", "p-6", "lg:p-8", "bg-gradient-to-t", "from-black/90", "to-transparent", "flex", "justify-between", "items-end"], [1, "max-w-[70%]"], [1, "text-[9px]", "lg:text-[10px]", "font-bold", "uppercase", "tracking-[0.5em]", "text-[#C6A96B]", "mb-1", "lg:mb-2", "font-mono-tech"], [1, "text-lg", "lg:text-xl", "font-serif-italic", "text-white/90", "italic", "truncate"], [1, "text-[8px]", "lg:text-[9px]", "text-white/30", "tracking-widest", "font-mono-tech", "uppercase"]], template: function GalleryImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domListener("click", function GalleryImageComponent_Template_div_click_0_listener() {
          return ctx.openLightbox();
        });
        \u0275\u0275domElement(1, "img", 1);
        \u0275\u0275domElementStart(2, "img", 2);
        \u0275\u0275domListener("load", function GalleryImageComponent_Template_img_load_2_listener() {
          return ctx.isLoaded.set(true);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, GalleryImageComponent_Conditional_4_Template, 2, 1, "span", 4);
        \u0275\u0275domElementStart(5, "span", 5);
        \u0275\u0275text(6, "View Fragment");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(7, GalleryImageComponent_Conditional_7_Template, 14, 4, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.aspectClass());
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", ctx.isLoaded());
        \u0275\u0275domProperty("src", ctx.lowResUrl(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.isLoaded())("scale-110", !ctx.isLoaded())("blur-lg", !ctx.isLoaded());
        \u0275\u0275domProperty("src", ctx.src(), \u0275\u0275sanitizeUrl)("alt", ctx.alt());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.categoryLabel() ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isLightboxOpen() ? 7 : -1);
      }
    }, styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n}\n/*# sourceMappingURL=gallery.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageComponent, [{
    type: Component,
    args: [{ selector: "app-gallery-image", template: `
    <div 
      class="group relative overflow-hidden bg-white/5 w-full h-full cursor-pointer"
      [class]="aspectClass()"
      (click)="openLightbox()"
    >
      <!-- Low-res blurred placeholder -->
      <img 
        [src]="lowResUrl()" 
        class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50 transition-opacity duration-1000"
        [class.opacity-0]="isLoaded()"
        alt=""
      >
      
      <!-- High-res image -->
      <img 
        [src]="src()" 
        [alt]="alt()"
        loading="lazy"
        decoding="async"
        (load)="isLoaded.set(true)"
        class="relative w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        [class.opacity-0]="!isLoaded()"
        [class.scale-110]="!isLoaded()"
        [class.blur-lg]="!isLoaded()"
      >

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center z-10">
        @if (categoryLabel()) {
          <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A96B] mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{{ categoryLabel() }}</span>
        }
        <span class="text-[10px] font-medium uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 delay-75">View Fragment</span>
      </div>
    </div>

    <!-- Minimal Lightbox -->
    @if (isLightboxOpen()) {
      <div 
        class="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-20 bg-black/98 backdrop-blur-3xl animate-fade-in"
        (click)="closeLightbox()"
      >
        <button 
          (click)="closeLightbox()" 
          class="absolute top-6 right-6 lg:top-10 lg:right-10 text-white opacity-40 hover:opacity-100 transition-opacity z-[1010] p-4"
          aria-label="Close Lightbox"
        >
          <span class="material-symbols-outlined text-4xl">close</span>
        </button>

        <div 
          class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center animate-lightbox"
          (click)="$event.stopPropagation()"
        >
          <img 
            [src]="src()" 
            [alt]="alt()" 
            class="max-w-full max-h-full object-contain shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5"
          >
          
          <div class="absolute bottom-0 left-0 w-full p-6 lg:p-8 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
             <div class="max-w-[70%]">
               <p class="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-[#C6A96B] mb-1 lg:mb-2 font-mono-tech">{{ categoryLabel() }}</p>
               <h3 class="text-lg lg:text-xl font-serif-italic text-white/90 italic truncate">{{ alt() }}</h3>
             </div>
             <p class="text-[8px] lg:text-[9px] text-white/30 tracking-widest font-mono-tech uppercase">Digital Archive</p>
          </div>
        </div>
      </div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.escape)": "onEsc()"
    }, styles: ["/* angular:styles/component:css;645105cb0d9d1d1890b2ea04b464a0b1cd0e8b1cefb926955635dd22b20144ad;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/gallery.component.ts */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fadeIn 0.4s ease-out forwards;\n}\n/*# sourceMappingURL=gallery.component.css.map */\n"] }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: true }] }], alt: [{ type: Input, args: [{ isSignal: true, alias: "alt", required: true }] }], aspectClass: [{ type: Input, args: [{ isSignal: true, alias: "aspectClass", required: false }] }], categoryLabel: [{ type: Input, args: [{ isSignal: true, alias: "categoryLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryImageComponent, { className: "GalleryImageComponent", filePath: "src/components/gallery.component.ts", lineNumber: 89 });
})();
var GalleryComponent = class _GalleryComponent {
  constructor() {
    this.isExpanded = signal(false, ...ngDevMode ? [{ debugName: "isExpanded" }] : []);
  }
  toggleExpansion() {
    this.isExpanded.update((v) => !v);
  }
  static {
    this.\u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], decls: 30, vars: 4, consts: [[1, "py-24", "lg:py-40", "bg-[#040405]", "border-y", "border-white/5", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "bg-glow-radial", "opacity-50", "pointer-events-none"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10", "relative", "z-10"], [1, "text-center", "mb-24", "lg:mb-32", "flex", "flex-col", "items-center", "reveal"], [1, "text-[9px]", "lg:text-[10px]", "font-bold", "uppercase", "tracking-[0.6em]", "text-[#C6A96B]", "mb-6", "lg:mb-8", "font-mono-tech"], [1, "text-4xl", "lg:text-8xl", "font-medium", "mb-8", "lg:mb-10", "tracking-tighter", "leading-tight"], [1, "text-gray-400", "max-w-2xl", "font-light", "text-lg", "lg:text-xl", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-8"], [1, "flex", "flex-col", "gap-8"], ["src", "https://picsum.photos/seed/g1/1200/1500", "alt", "Shadow Play", "aspectClass", "aspect-[4/5]", "categoryLabel", "Editorial", 1, "reveal"], ["src", "https://picsum.photos/seed/g2/1200/800", "alt", "Ethereal Shore", "aspectClass", "aspect-[3/2]", "categoryLabel", "Travel", 1, "reveal", "delay-1"], [1, "flex", "flex-col", "gap-8", "pt-0", "lg:pt-32"], ["src", "https://picsum.photos/seed/g3/1200/1200", "alt", "Gaze", "aspectClass", "aspect-square", "categoryLabel", "Portraits", 1, "reveal"], ["src", "https://picsum.photos/seed/g4/1200/1800", "alt", "Silhouette", "aspectClass", "aspect-[4/6]", "categoryLabel", "Fashion", 1, "reveal", "delay-1"], ["src", "https://picsum.photos/seed/g5/1200/1440", "alt", "Vows in Gold", "aspectClass", "aspect-[5/6]", "categoryLabel", "Weddings", 1, "reveal", "delay-2"], ["src", "https://picsum.photos/seed/g6/1200/1200", "alt", "Minimalist Soul", "aspectClass", "aspect-square", "categoryLabel", "Lifestyle", 1, "reveal", "delay-3"], ["src", "https://picsum.photos/seed/g7/1200/2100", "alt", "Cinematic Depth", "aspectClass", "aspect-[4/7]", "categoryLabel", "Films", 1, "reveal", "delay-2"], ["src", "https://picsum.photos/seed/g8/1200/800", "alt", "Echo of the City", "aspectClass", "aspect-[3/2]", "categoryLabel", "Travel", 1, "reveal", "delay-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-8", "mt-8", "animate-fade-in-slow"], [1, "flex", "justify-center", "mt-24", "lg:mt-32"], [1, "group", "flex", "items-center", "gap-6", "text-[10px]", "font-bold", "uppercase", "tracking-[0.4em]", "text-[#C6A96B]", "border", "border-[#C6A96B]/20", "px-10", "lg:px-14", "py-5", "lg:py-7", "hover:bg-[#C6A96B]", "hover:text-black", "transition-all", "duration-700", "relative", "overflow-hidden", "active:scale-95", "shadow-xl", "shadow-black/20", 3, "click"], [1, "relative", "z-10"], [1, "material-symbols-outlined", "text-sm", "transition-transform", "duration-700", "relative", "z-10"], ["src", "https://picsum.photos/seed/g9/1200/1200", "alt", "Stillness", "aspectClass", "aspect-square", "categoryLabel", "Still Life"], [1, "flex", "flex-col", "gap-8", "pt-0", "lg:pt-8"], ["src", "https://picsum.photos/seed/g10/1200/1600", "alt", "Avant Garde", "aspectClass", "aspect-[3/4]", "categoryLabel", "Fashion"], ["src", "https://picsum.photos/seed/g11/1600/900", "alt", "Panorama", "aspectClass", "aspect-[16/9]", "categoryLabel", "Editorial"], ["src", "https://picsum.photos/seed/g12/1200/1200", "alt", "Pathways", "aspectClass", "aspect-square", "categoryLabel", "Travel"]], template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "The Aesthetic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Signature Frames");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " A curation of raw emotions, cultural richness, and the quiet beauty found in everyday moments. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
        \u0275\u0275element(12, "app-gallery-image", 9)(13, "app-gallery-image", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275element(15, "app-gallery-image", 12)(16, "app-gallery-image", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275element(18, "app-gallery-image", 14)(19, "app-gallery-image", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275element(21, "app-gallery-image", 16)(22, "app-gallery-image", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, GalleryComponent_Conditional_23_Template, 9, 0, "div", 18);
        \u0275\u0275elementStart(24, "div", 19)(25, "button", 20);
        \u0275\u0275listener("click", function GalleryComponent_Template_button_click_25_listener() {
          return ctx.toggleExpansion();
        });
        \u0275\u0275elementStart(26, "span", 21);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 22);
        \u0275\u0275text(29, " expand_more ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275conditional(ctx.isExpanded() ? 23 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isExpanded() ? "Show Less" : "Open Full Gallery");
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx.isExpanded() ? "rotate(180deg)" : "translateY(2px)");
      }
    }, dependencies: [GalleryImageComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeInSlow {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in-slow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInSlow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=gallery.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ selector: "app-gallery", imports: [GalleryImageComponent], template: `
    <section class="py-24 lg:py-40 bg-[#040405] border-y border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-glow-radial opacity-50 pointer-events-none"></div>

      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div class="text-center mb-24 lg:mb-32 flex flex-col items-center reveal">
          <span class="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.6em] text-[#C6A96B] mb-6 lg:mb-8 font-mono-tech">The Aesthetic</span>
          <h2 class="text-4xl lg:text-8xl font-medium mb-8 lg:mb-10 tracking-tighter leading-tight">Signature Frames</h2>
          <p class="text-gray-400 max-w-2xl font-light text-lg lg:text-xl leading-relaxed">
            A curation of raw emotions, cultural richness, and the quiet beauty found in everyday moments.
          </p>
        </div>

        <!-- Masonry-style Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col gap-8">
            <app-gallery-image src="https://picsum.photos/seed/g1/1200/1500" alt="Shadow Play" aspectClass="aspect-[4/5]" categoryLabel="Editorial" class="reveal" />
            <app-gallery-image src="https://picsum.photos/seed/g2/1200/800" alt="Ethereal Shore" aspectClass="aspect-[3/2]" categoryLabel="Travel" class="reveal delay-1" />
          </div>
          <div class="flex flex-col gap-8 pt-0 lg:pt-32">
            <app-gallery-image src="https://picsum.photos/seed/g3/1200/1200" alt="Gaze" aspectClass="aspect-square" categoryLabel="Portraits" class="reveal" />
            <app-gallery-image src="https://picsum.photos/seed/g4/1200/1800" alt="Silhouette" aspectClass="aspect-[4/6]" categoryLabel="Fashion" class="reveal delay-1" />
          </div>
          <div class="flex flex-col gap-8">
            <app-gallery-image src="https://picsum.photos/seed/g5/1200/1440" alt="Vows in Gold" aspectClass="aspect-[5/6]" categoryLabel="Weddings" class="reveal delay-2" />
            <app-gallery-image src="https://picsum.photos/seed/g6/1200/1200" alt="Minimalist Soul" aspectClass="aspect-square" categoryLabel="Lifestyle" class="reveal delay-3" />
          </div>
          <div class="flex flex-col gap-8 pt-0 lg:pt-32">
            <app-gallery-image src="https://picsum.photos/seed/g7/1200/2100" alt="Cinematic Depth" aspectClass="aspect-[4/7]" categoryLabel="Films" class="reveal delay-2" />
            <app-gallery-image src="https://picsum.photos/seed/g8/1200/800" alt="Echo of the City" aspectClass="aspect-[3/2]" categoryLabel="Travel" class="reveal delay-3" />
          </div>
        </div>

        @if (isExpanded()) {
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 animate-fade-in-slow">
             <div class="flex flex-col gap-8"><app-gallery-image src="https://picsum.photos/seed/g9/1200/1200" alt="Stillness" aspectClass="aspect-square" categoryLabel="Still Life" /></div>
             <div class="flex flex-col gap-8 pt-0 lg:pt-8"><app-gallery-image src="https://picsum.photos/seed/g10/1200/1600" alt="Avant Garde" aspectClass="aspect-[3/4]" categoryLabel="Fashion" /></div>
             <div class="flex flex-col gap-8"><app-gallery-image src="https://picsum.photos/seed/g11/1600/900" alt="Panorama" aspectClass="aspect-[16/9]" categoryLabel="Editorial" /></div>
             <div class="flex flex-col gap-8 pt-0 lg:pt-8"><app-gallery-image src="https://picsum.photos/seed/g12/1200/1200" alt="Pathways" aspectClass="aspect-square" categoryLabel="Travel" /></div>
          </div>
        }

        <div class="flex justify-center mt-24 lg:mt-32">
          <button 
            (click)="toggleExpansion()"
            class="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#C6A96B] border border-[#C6A96B]/20 px-10 lg:px-14 py-5 lg:py-7 hover:bg-[#C6A96B] hover:text-black transition-all duration-700 relative overflow-hidden active:scale-95 shadow-xl shadow-black/20"
          >
            <span class="relative z-10">{{ isExpanded() ? 'Show Less' : 'Open Full Gallery' }}</span>
            <span 
              class="material-symbols-outlined text-sm transition-transform duration-700 relative z-10"
              [style.transform]="isExpanded() ? 'rotate(180deg)' : 'translateY(2px)'"
            >
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;de0313fa8232dfb75fd85b6bb77d6c8e45128e9bc3baf8478f9222d9e9d7c6c8;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/gallery.component.ts */\n@keyframes fadeInSlow {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in-slow {\n  animation: fadeInSlow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=gallery.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src/components/gallery.component.ts", lineNumber: 199 });
})();

export {
  GalleryImageComponent,
  GalleryComponent
};
//# sourceMappingURL=chunk-NXF5HAGQ.js.map
