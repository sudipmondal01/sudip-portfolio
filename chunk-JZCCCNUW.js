import {
  GalleryComponent
} from "./chunk-G2PG4CHG.js";
import {
  RouterLink
} from "./chunk-BVW7B7VI.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresolveWindow,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BAHET4XE.js";

// src/components/hero.component.ts
var _forTrack0 = ($index, $item) => $item.url;
function HeroComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "picture");
    \u0275\u0275element(2, "source", 34)(3, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 36)(5, "div", 37);
    \u0275\u0275elementStart(6, "div", 38)(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const \u0275$index_55_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("z-index", ctx_r2.activeSlide() === \u0275$index_55_r2 ? 20 : 10);
    \u0275\u0275classProp("opacity-100", ctx_r2.activeSlide() === \u0275$index_55_r2)("opacity-0", ctx_r2.activeSlide() !== \u0275$index_55_r2)("scale-100", ctx_r2.activeSlide() === \u0275$index_55_r2)("scale-95", ctx_r2.activeSlide() !== \u0275$index_55_r2);
    \u0275\u0275attribute("aria-hidden", ctx_r2.activeSlide() !== \u0275$index_55_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("srcset", ctx_r2.getOptimizedImageUrl(image_r1.url, "webp"));
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-cinematic-zoom", ctx_r2.activeSlide() === \u0275$index_55_r2);
    \u0275\u0275property("src", ctx_r2.getOptimizedImageUrl(image_r1.url), \u0275\u0275sanitizeUrl)("alt", image_r1.alt);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("translate-y-4", ctx_r2.activeSlide() !== \u0275$index_55_r2)("opacity-0", ctx_r2.activeSlide() !== \u0275$index_55_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r1.meta);
  }
}
var HeroComponent = class _HeroComponent {
  constructor() {
    this.activeSlide = signal(0, ...ngDevMode ? [{ debugName: "activeSlide" }] : []);
    this.isPaused = signal(false, ...ngDevMode ? [{ debugName: "isPaused" }] : []);
    this.showControls = signal(false, ...ngDevMode ? [{ debugName: "showControls" }] : []);
    this.animationKey = signal(0, ...ngDevMode ? [{ debugName: "animationKey" }] : []);
    this.ROTATION_INTERVAL = 7e3;
    this.touchStartX = 0;
    this.heroImages = [
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A2320_Original_nutyy7.jpg",
        alt: "Wedding Narrative",
        meta: "ISO 100 \u2022 f/1.8 \u2022 1/200s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5194_l4lysf.jpg",
        alt: "Editorial Portrait",
        meta: "ISO 400 \u2022 f/2.8 \u2022 1/500s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/IMG_5195_z3sj6h.jpg",
        alt: "Fashion Editorial",
        meta: "ISO 200 \u2022 f/1.4 \u2022 1/1000s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706682/5O7A6852_iqtgvu.jpg",
        alt: "Travel Story",
        meta: "ISO 64 \u2022 f/8.0 \u2022 1/250s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706684/83C39FC3-6B8C-43C5-B339-328974B8627A_ebefds.jpg",
        alt: "Architectural Study",
        meta: "ISO 100 \u2022 f/11 \u2022 1/60s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg",
        alt: "Still Life",
        meta: "ISO 200 \u2022 f/2.0 \u2022 1/125s"
      },
      {
        url: "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706685/Portfolio_Photo-1_pavtot.jpg",
        alt: "Cinematic Street",
        meta: "ISO 200 \u2022 f/1.4 \u2022 1/500s"
      }
    ];
  }
  ngOnInit() {
    this.startTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
    if (this.hideTimer)
      clearTimeout(this.hideTimer);
  }
  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      if (!this.isPaused()) {
        this.nextSlide();
      }
    }, this.ROTATION_INTERVAL);
  }
  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  nextSlide() {
    this.activeSlide.update((current) => (current + 1) % this.heroImages.length);
    this.animationKey.update((key) => key + 1);
  }
  prevSlide() {
    this.activeSlide.update((current) => (current - 1 + this.heroImages.length) % this.heroImages.length);
    this.animationKey.update((key) => key + 1);
    this.startTimer();
  }
  goToSlide(index) {
    this.activeSlide.set(index);
    this.animationKey.update((key) => key + 1);
    this.startTimer();
  }
  manualNext(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.nextSlide();
    this.startTimer();
  }
  togglePause(event) {
    event.preventDefault();
    this.isPaused.update((v) => !v);
  }
  onTouchStart(event) {
    this.touchStartX = event.touches[0].screenX;
    this.showControls.set(true);
    if (this.hideTimer)
      clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.showControls.set(false), 3e3);
  }
  onMouseEnter() {
    this.isPaused.set(true);
    this.showControls.set(true);
    if (this.hideTimer)
      clearTimeout(this.hideTimer);
  }
  onMouseLeave() {
    this.isPaused.set(false);
    this.showControls.set(false);
  }
  onTouchEnd(event) {
    const touchStartX = this.touchStartX;
    const touchEndX = event.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0)
        this.nextSlide();
      else
        this.prevSlide();
      this.startTimer();
    }
  }
  getOptimizedImageUrl(originalUrl, format = "auto") {
    if (originalUrl.includes("res.cloudinary.com")) {
      const separator = originalUrl.includes("?") ? "&" : "?";
      return `${originalUrl}${separator}f_${format},q_auto,w_1200,c_limit`;
    }
    return originalUrl;
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], hostBindings: function HeroComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.ArrowRight", function HeroComponent_keydown_ArrowRight_HostBindingHandler($event) {
          return ctx.manualNext($event);
        }, \u0275\u0275resolveWindow)("keydown.ArrowLeft", function HeroComponent_keydown_ArrowLeft_HostBindingHandler() {
          return ctx.prevSlide();
        }, \u0275\u0275resolveWindow)("keydown.Space", function HeroComponent_keydown_Space_HostBindingHandler($event) {
          return ctx.togglePause($event);
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 48, vars: 11, consts: [["role", "region", "aria-roledescription", "carousel", "aria-label", "Cinematic Portfolio Slideshow", 1, "relative", "pt-28", "lg:pt-40", "pb-16", "lg:pb-32", "px-6", "lg:px-10", "overflow-hidden", "flex", "flex-col", "justify-center", 3, "touchstart", "touchend"], [1, "absolute", "top-1/4", "left-1/4", "w-[800px]", "h-[800px]", "bg-glow-radial", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-none", "opacity-40"], [1, "max-w-[1400px]", "mx-auto", "w-full", "grid", "grid-cols-1", "lg:grid-cols-12", "gap-16", "lg:gap-24", "items-center", "relative", "z-20"], [1, "lg:col-span-7", "flex", "flex-col"], [1, "reveal"], [1, "flex", "flex-col", "mb-16"], [1, "text-8xl", "md:text-[240px]", "font-serif-italic", "text-[#C6A96B]", "leading-[0.7]", "tracking-tighter", "-ml-1", "md:-ml-8", "drop-shadow-2xl", "select-none"], [1, "flex", "items-center", "gap-8", "mt-10", "md:mt-14"], [1, "h-[1px]", "w-16", "md:w-32", "bg-[#C6A96B]/20"], [1, "text-xl", "md:text-[48px]", "font-medium", "uppercase", "tracking-[0.5em]", "text-white/90", "leading-none", "select-none", "flex", "items-center"], [1, "font-serif-italic", "lowercase", "tracking-normal", "text-[#C6A96B]", "mx-4", "md:mx-6", "transform", "-translate-y-1", "md:-translate-y-2"], [1, "max-w-xl", "space-y-10", "reveal", "delay-1"], [1, "flex", "gap-6"], [1, "w-[1.5px]", "h-auto", "bg-gradient-to-b", "from-[#C6A96B]", "to-transparent"], [1, "text-gray-400", "text-lg", "md:text-xl", "leading-relaxed", "font-light"], [1, "flex", "flex-wrap", "gap-5", "pt-10"], ["routerLink", "/archive", 1, "px-14", "py-6", "bg-[#C6A96B]", "text-black", "text-[11px]", "font-bold", "uppercase", "tracking-[0.2em]", "transition-all", "duration-500", "hover:bg-white", "shadow-2xl", "shadow-[#C6A96B]/10", "active:scale-95"], ["routerLink", "/connect", 1, "px-14", "py-6", "bg-transparent", "border", "border-white/20", "text-white", "text-[11px]", "font-bold", "uppercase", "tracking-[0.2em]", "transition-all", "duration-500", "hover:border-white", "hover:bg-white/5", "active:scale-95"], [1, "lg:col-span-5", "relative", "group", 3, "mouseenter", "mouseleave"], [1, "relative", "z-10", "aspect-[3.5/4.5]", "overflow-hidden", "border", "border-white/5", "bg-[#040406]", "shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"], [1, "absolute", "inset-0", "transition-all", "duration-1000", "ease-[cubic-bezier(0.16,1,0.3,1)]", 3, "opacity-100", "opacity-0", "scale-100", "scale-95", "z-index"], [1, "absolute", "bottom-0", "left-0", "right-0", "z-40"], [1, "w-full", "h-1", "bg-black/20", "backdrop-blur-sm"], [1, "h-full", "bg-[#C6A96B]", "animate-progress-bar"], [1, "absolute", "bottom-4", "md:bottom-6", "right-4", "md:right-6", "z-50", "transition-all", "duration-500", "ease-out"], ["aria-label", "Next image", 1, "w-10", "h-10", "md:w-12", "md:h-12", "rounded-full", "border", "border-[#C6A96B]/40", "flex", "items-center", "justify-center", "text-[#C6A96B]", "bg-black/40", "backdrop-blur-md", "hover:bg-[#C6A96B]", "hover:text-black", "transition-all", "duration-300", "shadow-lg", "active:scale-90", 3, "click"], [1, "material-symbols-outlined", "text-lg", "md:text-xl"], [1, "absolute", "-bottom-6", "-right-6", "w-full", "h-full", "border", "border-white/5", "-z-10", "transition-transform", "duration-1000", "group-hover:translate-x-2", "group-hover:translate-y-2"], [1, "absolute", "left-10", "bottom-20", "hidden", "xl:flex", "flex-col", "items-center", "gap-10", "z-30"], [1, "flex", "flex-col", "gap-6", "text-[9px]", "font-bold", "uppercase", "tracking-[0.5em]", "text-gray-600"], ["href", "https://www.instagram.com/bunnyxdneo/", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-white", "transition-colors", "rotate-180", "[writing-mode:vertical-lr]"], ["href", "https://vimeo.com/sudipmondal", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-white", "transition-colors", "rotate-180", "[writing-mode:vertical-lr]"], [1, "w-px", "h-24", "bg-gradient-to-t", "from-white/10", "to-transparent"], [1, "absolute", "inset-0", "transition-all", "duration-1000", "ease-[cubic-bezier(0.16,1,0.3,1)]"], ["type", "image/webp", 3, "srcset"], ["loading", "eager", "decoding", "async", "fetchpriority", "high", 1, "w-full", "h-full", "object-cover", "will-change-transform", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black", "via-black/20", "to-transparent"], [1, "absolute", "inset-0", "bg-black/10"], [1, "absolute", "bottom-10", "left-10", "text-white", "z-30", "transition-all", "duration-1000"], [1, "text-[9px]", "font-mono-tech", "text-[#C6A96B]", "font-bold", "uppercase", "tracking-[0.3em]"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275listener("touchstart", function HeroComponent_Template_section_touchstart_0_listener($event) {
          return ctx.onTouchStart($event);
        })("touchend", function HeroComponent_Template_section_touchend_0_listener($event) {
          return ctx.onTouchEnd($event);
        });
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "span", 6);
        \u0275\u0275text(7, " Frames ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementStart(10, "span", 9);
        \u0275\u0275text(11, " Films ");
        \u0275\u0275elementStart(12, "span", 10);
        \u0275\u0275text(13, "&");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Stories ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
        \u0275\u0275element(17, "div", 13);
        \u0275\u0275elementStart(18, "p", 14);
        \u0275\u0275text(19, " Every moment carries a story waiting to be told. Through my lens, I capture emotions as they naturally unfold, preserving the laughter, the quiet glances, and the unspoken connections that make each journey unique. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275element(21, "div", 13);
        \u0275\u0275elementStart(22, "p", 14);
        \u0275\u0275text(23, " With 50+ stories captured, from weddings filled with love to travels rich with culture and experience, my work is about documenting stories in their most authentic and timeless form. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "a", 16);
        \u0275\u0275text(26, " View Portfolio ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 17);
        \u0275\u0275text(28, " Contact Me ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 18);
        \u0275\u0275listener("mouseenter", function HeroComponent_Template_div_mouseenter_29_listener() {
          return ctx.onMouseEnter();
        })("mouseleave", function HeroComponent_Template_div_mouseleave_29_listener() {
          return ctx.onMouseLeave();
        });
        \u0275\u0275elementStart(30, "div", 19);
        \u0275\u0275repeaterCreate(31, HeroComponent_For_32_Template, 9, 21, "div", 20, _forTrack0);
        \u0275\u0275elementStart(33, "div", 21)(34, "div", 22);
        \u0275\u0275element(35, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 24)(37, "button", 25);
        \u0275\u0275listener("click", function HeroComponent_Template_button_click_37_listener($event) {
          return ctx.manualNext($event);
        });
        \u0275\u0275elementStart(38, "span", 26);
        \u0275\u0275text(39, "arrow_forward");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(40, "div", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 28)(42, "div", 29)(43, "a", 30);
        \u0275\u0275text(44, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 31);
        \u0275\u0275text(46, "Vimeo");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(47, "div", 32);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.heroImages);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("animation-play-state", ctx.isPaused() ? "paused" : "running");
        \u0275\u0275attribute("key", ctx.animationKey());
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-100", ctx.showControls() || ctx.isPaused())("translate-y-0", ctx.showControls() || ctx.isPaused())("opacity-0", !(ctx.showControls() || ctx.isPaused()))("translate-y-4", !(ctx.showControls() || ctx.isPaused()));
      }
    }, dependencies: [RouterLink], styles: ["\n\n@keyframes _ngcontent-%COMP%_cinematicZoom {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.02);\n  }\n}\n.animate-cinematic-zoom[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cinematicZoom 8s ease-out forwards;\n  will-change: transform;\n}\n@keyframes _ngcontent-%COMP%_progressBar {\n  0% {\n    width: 0%;\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n  }\n}\n.animate-progress-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progressBar 7s linear forwards;\n  will-change: width;\n}\n/*# sourceMappingURL=hero.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [RouterLink], template: `
    <section 
      class="relative pt-28 lg:pt-40 pb-16 lg:pb-32 px-6 lg:px-10 overflow-hidden flex flex-col justify-center"
      role="region" 
      aria-roledescription="carousel"
      aria-label="Cinematic Portfolio Slideshow"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      <!-- Background Depth Glow -->
      <div class="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-glow-radial -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40"></div>

      <div class="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-20">
        
        <!-- Left Content (Editorial Headline - Static) -->
        <div class="lg:col-span-7 flex flex-col">
          <div class="reveal">
            <h1 class="flex flex-col mb-16">
              <span class="text-8xl md:text-[240px] font-serif-italic text-[#C6A96B] leading-[0.7] tracking-tighter -ml-1 md:-ml-8 drop-shadow-2xl select-none">
                Frames
              </span>
              <div class="flex items-center gap-8 mt-10 md:mt-14">
                <div class="h-[1px] w-16 md:w-32 bg-[#C6A96B]/20"></div>
                <span class="text-xl md:text-[48px] font-medium uppercase tracking-[0.5em] text-white/90 leading-none select-none flex items-center">
                  Films <span class="font-serif-italic lowercase tracking-normal text-[#C6A96B] mx-4 md:mx-6 transform -translate-y-1 md:-translate-y-2">&</span> Stories
                </span>
              </div>
            </h1>
          </div>

          <div class="max-w-xl space-y-10 reveal delay-1">
            <div class="flex gap-6">
              <div class="w-[1.5px] h-auto bg-gradient-to-b from-[#C6A96B] to-transparent"></div>
              <p class="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                Every moment carries a story waiting to be told. Through my lens, I capture emotions as they naturally unfold, preserving the laughter, the quiet glances, and the unspoken connections that make each journey unique.
              </p>
            </div>
            
            <div class="flex gap-6">
              <div class="w-[1.5px] h-auto bg-gradient-to-b from-[#C6A96B] to-transparent"></div>
              <p class="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                With 50+ stories captured, from weddings filled with love to travels rich with culture and experience, my work is about documenting stories in their most authentic and timeless form.
              </p>
            </div>

            <div class="flex flex-wrap gap-5 pt-10">
              <a routerLink="/archive" class="px-14 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white shadow-2xl shadow-[#C6A96B]/10 active:scale-95">
                View Portfolio
              </a>
              <a routerLink="/connect" class="px-14 py-6 bg-transparent border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:border-white hover:bg-white/5 active:scale-95">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <!-- Right: The Cinematic Card (Slideshow Card) -->
        <div 
          class="lg:col-span-5 relative group" 
          (mouseenter)="onMouseEnter()" 
          (mouseleave)="onMouseLeave()"
        >
          <div class="relative z-10 aspect-[3.5/4.5] overflow-hidden border border-white/5 bg-[#040406] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            @for (image of heroImages; track image.url; let i = $index) {
              <div 
                class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                [class.opacity-100]="activeSlide() === i"
                [class.opacity-0]="activeSlide() !== i"
                [class.scale-100]="activeSlide() === i"
                [class.scale-95]="activeSlide() !== i"
                [style.z-index]="activeSlide() === i ? 20 : 10"
                [attr.aria-hidden]="activeSlide() !== i"
              >
                <picture>
                  <!-- WebP format for modern browsers -->
                  <source [srcset]="getOptimizedImageUrl(image.url, 'webp')" type="image/webp">
                  <!-- Fallback to original format -->
                  <img 
                    [src]="getOptimizedImageUrl(image.url)"
                    [alt]="image.alt"
                    class="w-full h-full object-cover will-change-transform"
                    [class.animate-cinematic-zoom]="activeSlide() === i"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                  >
                </picture>
                <!-- Cinematic Scrims -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div class="absolute inset-0 bg-black/10"></div>
                
                <!-- Metadata Overlay -->
                <div class="absolute bottom-10 left-10 text-white z-30 transition-all duration-1000" [class.translate-y-4]="activeSlide() !== i" [class.opacity-0]="activeSlide() !== i">
                  <p class="text-[9px] font-mono-tech text-[#C6A96B] font-bold uppercase tracking-[0.3em]">{{ image.meta }}</p>
                </div>
              </div>
            }

            <!-- Progress Bar (Bottom) -->
            <div class="absolute bottom-0 left-0 right-0 z-40">
              <div class="w-full h-1 bg-black/20 backdrop-blur-sm">
                <div 
                  class="h-full bg-[#C6A96B] animate-progress-bar"
                  [style.animation-play-state]="isPaused() ? 'paused' : 'running'"
                  [attr.key]="animationKey()"
                ></div>
              </div>
            </div>

            <!-- Navigation Arrow Button (Bottom Right) -->
            <div 
              class="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-50 transition-all duration-500 ease-out"
              [class.opacity-100]="showControls() || isPaused()"
              [class.translate-y-0]="showControls() || isPaused()"
              [class.opacity-0]="!(showControls() || isPaused())"
              [class.translate-y-4]="!(showControls() || isPaused())"
            >
              <button 
                (click)="manualNext($event)"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C6A96B]/40 flex items-center justify-center text-[#C6A96B] bg-black/40 backdrop-blur-md hover:bg-[#C6A96B] hover:text-black transition-all duration-300 shadow-lg active:scale-90"
                aria-label="Next image"
              >
                <span class="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 w-full h-full border border-white/5 -z-10 transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>

      <!-- Navigation Guides -->
      <div class="absolute left-10 bottom-20 hidden xl:flex flex-col items-center gap-10 z-30">
        <div class="flex flex-col gap-6 text-[9px] font-bold uppercase tracking-[0.5em] text-gray-600">
          <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors rotate-180 [writing-mode:vertical-lr]">Instagram</a>
          <a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors rotate-180 [writing-mode:vertical-lr]">Vimeo</a>
        </div>
        <div class="w-px h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.ArrowRight)": "manualNext($event)",
      "(window:keydown.ArrowLeft)": "prevSlide()",
      "(window:keydown.Space)": "togglePause($event)"
    }, styles: ["/* angular:styles/component:css;76a3efbe04087a52b90d0f1031e7506e70bcf2d66d01e41adde0874186d5c890;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/hero.component.ts */\n@keyframes cinematicZoom {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.02);\n  }\n}\n.animate-cinematic-zoom {\n  animation: cinematicZoom 8s ease-out forwards;\n  will-change: transform;\n}\n@keyframes progressBar {\n  0% {\n    width: 0%;\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n  }\n}\n.animate-progress-bar {\n  animation: progressBar 7s linear forwards;\n  will-change: width;\n}\n/*# sourceMappingURL=hero.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/components/hero.component.ts", lineNumber: 188 });
})();

// src/components/project-grid.component.ts
var _c0 = () => ["/archive", "WEDDINGS"];
var _c1 = () => ["/archive", "EDITORIAL"];
var _c2 = () => ["/archive", "TRAVEL"];
var _c3 = () => ["/archive", "PRODUCTS"];
var ProjectGridComponent = class _ProjectGridComponent {
  static {
    this.\u0275fac = function ProjectGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectGridComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectGridComponent, selectors: [["app-project-grid"]], decls: 49, vars: 8, consts: [[1, "py-24", "px-6", "lg:px-10", "max-w-[1400px]", "mx-auto", "reveal"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-end", "border-b", "border-white/10", "pb-8", "mb-12"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "w-2", "h-2", "bg-[#C6A96B]"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-[#C6A96B]", "font-mono-tech"], [1, "text-4xl", "md:text-5xl", "font-semibold", "tracking-tight"], ["routerLink", "/archive", 1, "group", "flex", "items-center", "gap-3", "text-gray-400", "hover:text-white", "transition-colors", "mt-8", "md:mt-0"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest"], [1, "material-symbols-outlined", "group-hover:translate-x-1", "transition-transform"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-6"], [1, "md:col-span-2", "relative", "aspect-[16/10]", "overflow-hidden", "group", "border", "border-white/5", 3, "routerLink"], ["src", "https://res.cloudinary.com/dk6lpjet3/image/upload/v1771706683/5O7A6870_pb6ruj.jpg?q=80&w=800&auto=format&fm=webp", "alt", "Weddings", "loading", "lazy", "decoding", "async", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-700", "group-hover:scale-105", "will-change-transform"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/90", "via-black/20", "to-transparent"], [1, "absolute", "bottom-8", "left-8"], [1, "block", "w-px", "h-4", "bg-[#C6A96B]", "mb-3"], [1, "text-[10px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.2em]", "mb-2", "block", "font-mono-tech"], [1, "text-3xl", "font-bold", "tracking-wide"], [1, "relative", "aspect-[4/5]", "overflow-hidden", "group", "border", "border-white/5", 3, "routerLink"], ["src", "https://res.cloudinary.com/dk6lpjet3/image/upload/v1772714057/5O7A7282_tvvhs7.jpg?q=80&w=600&auto=format&fm=webp", "alt", "Editorial", "loading", "lazy", "decoding", "async", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-700", "group-hover:scale-105", "will-change-transform"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/90", "via-transparent", "to-transparent"], [1, "text-[9px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.2em]", "mb-1", "block"], [1, "text-xl", "font-bold", "tracking-wide"], ["src", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop&fm=webp", "alt", "Travel", "loading", "lazy", "decoding", "async", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-700", "group-hover:scale-105", "will-change-transform"], [1, "md:col-span-3", "relative", "aspect-[12/4]", "overflow-hidden", "group", "border", "border-white/5", 3, "routerLink"], ["src", "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=1000&auto=format&fit=crop&fm=webp", "alt", "Products", "loading", "lazy", "decoding", "async", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-700", "group-hover:scale-105", "will-change-transform"], [1, "absolute", "bottom-10", "left-10"], [1, "text-4xl", "font-bold", "tracking-wide"]], template: function ProjectGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275element(4, "span", 3);
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Curated Portfolio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h2", 5);
        \u0275\u0275text(8, "Project Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 6)(10, "span", 7);
        \u0275\u0275text(11, "Explore Full Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "arrow_right_alt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "a", 10);
        \u0275\u0275element(16, "img", 11)(17, "div", 12);
        \u0275\u0275elementStart(18, "div", 13);
        \u0275\u0275element(19, "span", 14);
        \u0275\u0275elementStart(20, "span", 15);
        \u0275\u0275text(21, "Ceremony");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h3", 16);
        \u0275\u0275text(23, "Weddings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "a", 17);
        \u0275\u0275element(25, "img", 18)(26, "div", 19);
        \u0275\u0275elementStart(27, "div", 13)(28, "span", 20);
        \u0275\u0275text(29, "Artistic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h3", 21);
        \u0275\u0275text(31, "Editorial");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "a", 17);
        \u0275\u0275element(33, "img", 22)(34, "div", 19);
        \u0275\u0275elementStart(35, "div", 13)(36, "span", 20);
        \u0275\u0275text(37, "Adventure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h3", 21);
        \u0275\u0275text(39, "Travel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "a", 23);
        \u0275\u0275element(41, "img", 24)(42, "div", 12);
        \u0275\u0275elementStart(43, "div", 25);
        \u0275\u0275element(44, "span", 14);
        \u0275\u0275elementStart(45, "span", 15);
        \u0275\u0275text(46, "Commercial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h3", 26);
        \u0275\u0275text(48, "Products");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c2));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c3));
      }
    }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectGridComponent, [{
    type: Component,
    args: [{
      selector: "app-project-grid",
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectGridComponent, { className: "ProjectGridComponent", filePath: "src/components/project-grid.component.ts", lineNumber: 87 });
})();

// src/components/about-section.component.ts
var AboutSectionComponent = class _AboutSectionComponent {
  static {
    this.\u0275fac = function AboutSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutSectionComponent, selectors: [["app-about-section"]], decls: 47, vars: 0, consts: [[1, "py-40", "px-6", "lg:px-10", "max-w-[1400px]", "mx-auto", "overflow-hidden"], [1, "mb-32", "reveal", "text-center", "flex", "flex-col", "items-center"], [1, "flex", "items-center", "gap-4", "mb-8"], [1, "w-px", "h-6", "bg-[#C6A96B]"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.5em]", "text-[#C6A96B]", "font-mono-tech"], [1, "text-5xl", "md:text-7xl", "font-medium", "tracking-tighter", "mb-10", "leading-tight"], [1, "font-serif-italic", "text-[#C6A96B]"], [1, "text-gray-400", "text-lg", "md:text-xl", "font-light", "leading-relaxed", "max-w-2xl"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-16", "lg:gap-24", "relative"], [1, "flex", "flex-col", "gap-10", "reveal", "group"], [1, "flex", "flex-col", "gap-4"], [1, "text-5xl", "md:text-6xl", "font-serif-italic", "text-[#C6A96B]/10", "group-hover:text-[#C6A96B]/30", "transition-colors", "duration-700"], [1, "text-2xl", "font-semibold", "tracking-tight"], [1, "w-12", "h-px", "bg-[#C6A96B]/30", "group-hover:w-full", "transition-all", "duration-1000", "ease-in-out"], [1, "text-gray-400", "text-base", "leading-relaxed", "font-light"], [1, "flex", "flex-col", "gap-10", "reveal", "delay-1", "group"], [1, "flex", "flex-col", "gap-10", "reveal", "delay-2", "group"], [1, "mt-32", "flex", "justify-center", "reveal", "delay-3"], ["routerLink", "/artist", 1, "group", "flex", "items-center", "gap-6", "text-[10px]", "font-bold", "uppercase", "tracking-[0.4em]", "text-[#C6A96B]", "hover:text-white", "transition-all", "duration-500"], [1, "border-b", "border-[#C6A96B]/30", "pb-1", "group-hover:border-white", "transition-all"], [1, "material-symbols-outlined", "text-sm", "group-hover:translate-x-2", "transition-transform"]], template: function AboutSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "The Process");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, " Crafting ");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "Art");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Out of Moments ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, " Every project begins with a quiet understanding of a unique story and ends as a finished, timeless artwork curated to last generations. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "span", 11);
        \u0275\u0275text(17, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h3", 12);
        \u0275\u0275text(19, "Discovery");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "div", 13);
        \u0275\u0275elementStart(21, "p", 14);
        \u0275\u0275text(22, " Everything begins with connection. We dive into your vision through shared conversations, building the trust and intention needed to understand the pulse of your story before the first shutter clicks. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 15)(24, "div", 10)(25, "span", 11);
        \u0275\u0275text(26, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h3", 12);
        \u0275\u0275text(28, "The Experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 13);
        \u0275\u0275elementStart(30, "p", 14);
        \u0275\u0275text(31, " The day is an experience, not a session. We prioritize flow over posing, creating a space of comfort where you can be fully present. This allows raw, authentic moments to unfold naturally in their own rhythm. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 16)(33, "div", 10)(34, "span", 11);
        \u0275\u0275text(35, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3", 12);
        \u0275\u0275text(37, "The Final Artwork");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "div", 13);
        \u0275\u0275elementStart(39, "p", 14);
        \u0275\u0275text(40, " Refining the echo of the day. Every frame is hand-curated and polished with a signature editorial touch. We focus on timeless quality over speed, ensuring each visual is a lasting piece of history. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 17)(42, "a", 18)(43, "span", 19);
        \u0275\u0275text(44, "Deep Dive into my approach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 20);
        \u0275\u0275text(46, "arrow_forward");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutSectionComponent, [{
    type: Component,
    args: [{
      selector: "app-about-section",
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutSectionComponent, { className: "AboutSectionComponent", filePath: "src/components/about-section.component.ts", lineNumber: 76 });
})();

// src/components/testimonials.component.ts
var _forTrack02 = ($index, $item) => $item.name;
function TestimonialsComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12)(1, "div", 13)(2, "h3", 14);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 16);
    \u0275\u0275domElement(7, "img", 17)(8, "div", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(9, "div", 19);
    \u0275\u0275domElementStart(10, "div", 20)(11, "div", 21);
    \u0275\u0275domElement(12, "img", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div")(14, "h4", 23);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 24)(17, "span", 25);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(19, "span", 26);
    \u0275\u0275domElementStart(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_20_r2 = ctx.$index;
    \u0275\u0275classProp("delay-1", \u0275$index_20_r2 % 3 === 1)("delay-2", \u0275$index_20_r2 % 3 === 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1.storyTitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.quote, " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", item_r1.projectImg, \u0275\u0275sanitizeUrl)("alt", item_r1.storyTitle);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("src", item_r1.clientImg, \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.location);
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  constructor() {
    this.stories = [
      {
        storyTitle: "The Golden Hour Vows",
        quote: "The way he captured the light during our ceremony was nothing short of magical. It felt as if time stood still in those frames.",
        name: "Priya & Rahul",
        role: "Wedding",
        location: "Jaipur, IN",
        clientImg: "https://picsum.photos/seed/client1/100/100",
        projectImg: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
      },
      {
        storyTitle: "Minimalist Elegance",
        quote: "Professional, creative, and utterly brilliant. The brand campaign photos elevated our entire product launch to an editorial level.",
        name: "Luxe Aromas",
        role: "Commercial",
        location: "London, UK",
        clientImg: "https://picsum.photos/seed/client2/100/100",
        projectImg: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=1974&auto=format&fit=crop"
      },
      {
        storyTitle: "Echoes of the Coast",
        quote: "Every frame tells a story. We look back at our travel film and it feels like we are standing on that cliffside all over again.",
        name: "The Kapoors",
        role: "Travel Film",
        location: "Amalfi, IT",
        clientImg: "https://picsum.photos/seed/client3/100/100",
        projectImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
      },
      {
        storyTitle: "A Visionary Perspective",
        quote: "A visionary behind the lens. The fashion shoot was handled with such grace and absolute professionalism from start to finish.",
        name: "Aria V.",
        role: "Fashion Editorial",
        location: "Paris, FR",
        clientImg: "https://picsum.photos/seed/client5/100/100",
        projectImg: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
      },
      {
        storyTitle: "Intimate Narratives",
        quote: "His ability to remain invisible while capturing the most raw, intimate moments is truly a superpower we haven't seen before.",
        name: "Ishaan & Mira",
        role: "Destination Wedding",
        location: "Udaipur, IN",
        clientImg: "https://picsum.photos/seed/client7/100/100",
        projectImg: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
      },
      {
        storyTitle: "Heritage Redefined",
        quote: "Stunning visuals and perfect timing. The documentary piece on our heritage property was breathtaking and deeply moving.",
        name: "Heritage Hotels",
        role: "Documentary",
        location: "Rajasthan, IN",
        clientImg: "https://picsum.photos/seed/client8/100/100",
        projectImg: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop"
      }
    ];
  }
  static {
    this.\u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestimonialsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 17, vars: 0, consts: [[1, "py-40", "px-6", "lg:px-10", "max-w-[1400px]", "mx-auto", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "text-center", "mb-32", "reveal"], [1, "flex", "items-center", "gap-4", "mb-8"], [1, "w-px", "h-6", "bg-[#C6A96B]"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.6em]", "text-[#C6A96B]", "font-mono-tech"], [1, "text-5xl", "md:text-7xl", "font-medium", "tracking-tighter"], [1, "font-serif-italic", "text-[#C6A96B]"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-16", "lg:gap-20"], [1, "flex", "flex-col", "group", "reveal", 3, "delay-1", "delay-2"], [1, "mt-40", "flex", "flex-col", "items-center", "reveal", "delay-2"], [1, "text-[10px]", "text-gray-600", "uppercase", "tracking-[0.6em]", "mb-10"], [1, "w-px", "h-24", "bg-gradient-to-b", "from-white/10", "to-transparent"], [1, "flex", "flex-col", "group", "reveal"], [1, "mb-10"], [1, "text-2xl", "font-serif-italic", "text-[#C6A96B]", "mb-6", "leading-tight", "group-hover:translate-x-2", "transition-transform", "duration-700"], [1, "text-gray-400", "font-light", "text-base", "leading-relaxed", "italic"], [1, "relative", "aspect-[16/10]", "overflow-hidden", "bg-white/5", "mb-10", "border", "border-white/5", "shadow-2xl", "shadow-black/40"], [1, "w-full", "h-full", "object-cover", "grayscale", "brightness-75", "group-hover:grayscale-0", "group-hover:brightness-100", "group-hover:scale-[1.03]", "transition-all", "duration-[1.5s]", "ease-out", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/40", "to-transparent", "pointer-events-none"], [1, "w-full", "h-px", "bg-gradient-to-r", "from-[#C6A96B]/20", "via-white/5", "to-transparent", "mb-8"], [1, "flex", "items-center", "gap-5"], [1, "w-12", "h-12", "rounded-full", "overflow-hidden", "grayscale", "group-hover:grayscale-0", "transition-all", "duration-700", "ring-1", "ring-white/10", "group-hover:ring-[#C6A96B]/40", "ring-offset-4", "ring-offset-[#040406]"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-widest", "text-white", "mb-1"], [1, "flex", "items-center", "gap-3"], [1, "text-[9px]", "uppercase", "tracking-[0.2em]", "text-[#C6A96B]", "font-mono-tech"], [1, "w-1", "h-1", "rounded-full", "bg-white/10"], [1, "text-[9px]", "uppercase", "tracking-[0.2em]", "text-gray-600", "font-mono-tech"]], template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275domElement(3, "span", 3);
        \u0275\u0275domElementStart(4, "span", 4);
        \u0275\u0275text(5, "Stories Told");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(6, "h2", 5);
        \u0275\u0275text(7, "Voices of ");
        \u0275\u0275domElementStart(8, "span", 6);
        \u0275\u0275text(9, "Connection");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(10, "div", 7);
        \u0275\u0275repeaterCreate(11, TestimonialsComponent_For_12_Template, 22, 13, "div", 8, _forTrack02);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, "Real People. Raw Emotion. Timeless Art.");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(16, "div", 11);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.stories);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{
      selector: "app-testimonials",
      template: `
    <section class="py-40 px-6 lg:px-10 max-w-[1400px] mx-auto overflow-hidden">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-32 reveal">
        <div class="flex items-center gap-4 mb-8">
          <span class="w-px h-6 bg-[#C6A96B]"></span>
          <span class="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C6A96B] font-mono-tech">Stories Told</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-medium tracking-tighter">Voices of <span class="font-serif-italic text-[#C6A96B]">Connection</span></h2>
      </div>

      <!-- Editorial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
        @for (item of stories; track item.name; let i = $index) {
          <div 
            class="flex flex-col group reveal"
            [class.delay-1]="i % 3 === 1"
            [class.delay-2]="i % 3 === 2"
          >
            <!-- Narrative Title & Quote -->
            <div class="mb-10">
              <h3 class="text-2xl font-serif-italic text-[#C6A96B] mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-700">
                {{ item.storyTitle }}
              </h3>
              <p class="text-gray-400 font-light text-base leading-relaxed italic">
                {{ item.quote }}
              </p>
            </div>

            <!-- Project Thumbnail (The Fragment) -->
            <div class="relative aspect-[16/10] overflow-hidden bg-white/5 mb-10 border border-white/5 shadow-2xl shadow-black/40">
              <img 
                [src]="item.projectImg" 
                class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-[1.5s] ease-out" 
                [alt]="item.storyTitle"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>

            <!-- Divider -->
            <div class="w-full h-px bg-gradient-to-r from-[#C6A96B]/20 via-white/5 to-transparent mb-8"></div>

            <!-- Client Info -->
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10 group-hover:ring-[#C6A96B]/40 ring-offset-4 ring-offset-[#040406]">
                <img [src]="item.clientImg" class="w-full h-full object-cover" [alt]="item.name">
              </div>
              <div>
                <h4 class="text-[11px] font-bold uppercase tracking-widest text-white mb-1">{{ item.name }}</h4>
                <div class="flex items-center gap-3">
                  <span class="text-[9px] uppercase tracking-[0.2em] text-[#C6A96B] font-mono-tech">{{ item.role }}</span>
                  <span class="w-1 h-1 rounded-full bg-white/10"></span>
                  <span class="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-mono-tech">{{ item.location }}</span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Supporting Note -->
      <div class="mt-40 flex flex-col items-center reveal delay-2">
        <p class="text-[10px] text-gray-600 uppercase tracking-[0.6em] mb-10">Real People. Raw Emotion. Timeless Art.</p>
        <div class="w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/components/testimonials.component.ts", lineNumber: 85 });
})();

// src/components/cta-section.component.ts
var CtaSectionComponent = class _CtaSectionComponent {
  static {
    this.\u0275fac = function CtaSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CtaSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaSectionComponent, selectors: [["app-cta-section"]], decls: 21, vars: 0, consts: [[1, "py-40", "relative", "overflow-hidden", "bg-[#040406]", "border-t", "border-white/5"], [1, "absolute", "inset-0", "bg-tech-grid", "opacity-20", "pointer-events-none", "z-0"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "w-[600px]", "h-[600px]", "bg-[#C6A96B]/5", "blur-[120px]", "rounded-full", "pointer-events-none"], [1, "relative", "z-10", "max-w-4xl", "mx-auto", "px-6", "text-center", "flex", "flex-col", "items-center", "reveal"], [1, "w-24", "h-24", "rounded-full", "bg-[#C6A96B]/5", "border", "border-[#C6A96B]/20", "flex", "items-center", "justify-center", "mb-12", "relative", "group"], [1, "absolute", "inset-0", "rounded-full", "border", "border-[#C6A96B]/40", "scale-110", "opacity-0", "group-hover:opacity-100", "group-hover:scale-125", "transition-all", "duration-700"], [1, "material-symbols-outlined", "text-[#C6A96B]", "text-4xl", "animate-spin-slow"], [1, "text-5xl", "md:text-8xl", "font-medium", "leading-[1.1]", "tracking-tighter", "text-white", "mb-10"], [1, "hidden", "md:block"], [1, "font-serif-italic", "text-[#C6A96B]"], [1, "text-gray-400", "text-lg", "md:text-xl", "font-light", "mb-16", "max-w-2xl", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "gap-6", "w-full", "max-w-lg"], ["routerLink", "/connect", 1, "flex-1", "py-6", "bg-[#C6A96B]", "text-black", "text-[11px]", "font-bold", "uppercase", "tracking-[0.25em]", "hover:bg-white", "transition-all", "duration-500", "shadow-[0_10px_40px_rgba(198,169,107,0.15)]", "active:scale-[0.98]"], ["routerLink", "/connect", 1, "flex-1", "py-6", "bg-transparent", "border", "border-white/20", "text-white", "text-[11px]", "font-bold", "uppercase", "tracking-[0.25em]", "hover:border-white", "hover:bg-white/5", "transition-all", "duration-500", "active:scale-[0.98]"]], template: function CtaSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "div", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "shutter_speed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h2", 7);
        \u0275\u0275text(9, " Ready to tell ");
        \u0275\u0275element(10, "br", 8);
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "your");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " story? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15, " Available Worldwide for Weddings, Commercial projects and Editorial assignments. Let's create something timeless. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "button", 12);
        \u0275\u0275text(18, " Book a Consultation ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275text(20, " Hire Me ");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaSectionComponent, [{
    type: Component,
    args: [{
      selector: "app-cta-section",
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaSectionComponent, { className: "CtaSectionComponent", filePath: "src/components/cta-section.component.ts", lineNumber: 40 });
})();

// src/components/marquee-feed.component.ts
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => "dup-" + $item.id;
function MarqueeFeedComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "img", 5);
    \u0275\u0275domElementStart(2, "div", 6)(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5, "add_a_photo");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElement(6, "div", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", item_r1.url, \u0275\u0275sanitizeUrl)("alt", "Social feed " + item_r1.id);
  }
}
function MarqueeFeedComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "img", 5);
    \u0275\u0275domElementStart(2, "div", 6)(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5, "add_a_photo");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElement(6, "div", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", item_r2.url, \u0275\u0275sanitizeUrl)("alt", "Social feed duplicate " + item_r2.id);
  }
}
var MarqueeFeedComponent = class _MarqueeFeedComponent {
  constructor() {
    this.feedItems = [
      { id: 1, url: "https://picsum.photos/seed/f1/800/800" },
      { id: 2, url: "https://picsum.photos/seed/f2/800/800" },
      { id: 3, url: "https://picsum.photos/seed/f3/800/800" },
      { id: 4, url: "https://picsum.photos/seed/f4/800/800" },
      { id: 5, url: "https://picsum.photos/seed/f5/800/800" },
      { id: 6, url: "https://picsum.photos/seed/f6/800/800" }
    ];
  }
  static {
    this.\u0275fac = function MarqueeFeedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarqueeFeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarqueeFeedComponent, selectors: [["app-marquee-feed"]], decls: 8, vars: 0, consts: [[1, "relative", "py-0", "bg-black", "overflow-hidden", "group", "border-t", "border-white/5", "whitespace-nowrap"], [1, "animate-marquee-infinite", "flex", "flex-row", "flex-nowrap", "w-fit"], [1, "relative", "flex-shrink-0", "w-[280px]", "md:w-[20vw]", "aspect-square", "overflow-hidden", "group/item", "border-r", "border-white/5"], [1, "absolute", "inset-y-0", "left-0", "w-32", "bg-gradient-to-r", "from-black", "to-transparent", "z-10", "pointer-events-none"], [1, "absolute", "inset-y-0", "right-0", "w-32", "bg-gradient-to-l", "from-black", "to-transparent", "z-10", "pointer-events-none"], [1, "w-full", "h-full", "object-cover", "grayscale", "brightness-[0.4]", "group-hover/item:brightness-100", "group-hover/item:grayscale-0", "transition-all", "duration-1000", "ease-out", "scale-105", "group-hover/item:scale-100", 3, "src", "alt"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "pointer-events-none"], [1, "w-12", "h-12", "rounded-full", "bg-black/20", "backdrop-blur-sm", "border", "border-white/10", "flex", "items-center", "justify-center", "opacity-60", "group-hover/item:opacity-100", "group-hover/item:scale-110", "group-hover/item:bg-[#C6A96B]/20", "group-hover/item:border-[#C6A96B]/40", "transition-all", "duration-700"], [1, "material-symbols-outlined", "text-white", "group-hover/item:text-[#C6A96B]", "text-2xl"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/40", "to-transparent", "opacity-60"]], template: function MarqueeFeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, MarqueeFeedComponent_For_3_Template, 7, 2, "div", 2, _forTrack03);
        \u0275\u0275repeaterCreate(4, MarqueeFeedComponent_For_5_Template, 7, 2, "div", 2, _forTrack1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(6, "div", 3)(7, "div", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.feedItems);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.feedItems);
      }
    }, styles: ["\n\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.animate-marquee-infinite[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: fit-content;\n  animation: _ngcontent-%COMP%_marquee 40s linear infinite;\n  will-change: transform;\n}\n.animate-marquee-infinite[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n/*# sourceMappingURL=marquee-feed.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarqueeFeedComponent, [{
    type: Component,
    args: [{ selector: "app-marquee-feed", template: `
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;47c6f9583a7f8464d978a268662be4507294ac804c05456da78e5418705b19f0;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/marquee-feed.component.ts */\n@keyframes marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.animate-marquee-infinite {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: fit-content;\n  animation: marquee 40s linear infinite;\n  will-change: transform;\n}\n.animate-marquee-infinite:hover {\n  animation-play-state: paused;\n}\n/*# sourceMappingURL=marquee-feed.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarqueeFeedComponent, { className: "MarqueeFeedComponent", filePath: "src/components/marquee-feed.component.ts", lineNumber: 72 });
})();

// src/components/home.component.ts
var HomeComponent = class _HomeComponent {
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero")(1, "app-project-grid")(2, "app-gallery")(3, "app-about-section")(4, "app-testimonials")(5, "app-cta-section")(6, "app-marquee-feed");
      }
    }, dependencies: [
      HeroComponent,
      ProjectGridComponent,
      GalleryComponent,
      AboutSectionComponent,
      TestimonialsComponent,
      CtaSectionComponent,
      MarqueeFeedComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      imports: [
        HeroComponent,
        ProjectGridComponent,
        GalleryComponent,
        AboutSectionComponent,
        TestimonialsComponent,
        CtaSectionComponent,
        MarqueeFeedComponent
      ],
      template: `
    <app-hero />
    <app-project-grid />
    <app-gallery />
    <app-about-section />
    <app-testimonials />
    <app-cta-section />
    <app-marquee-feed />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/components/home.component.ts", lineNumber: 33 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-JZCCCNUW.js.map
