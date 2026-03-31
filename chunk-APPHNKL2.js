import {
  DomSanitizer,
  RouterLink
} from "./chunk-GA6UZJ6P.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtext
} from "./chunk-N32WVGY5.js";

// src/components/films-page.component.ts
function FilmsPageComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function FilmsPageComponent_Conditional_151_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVideo());
    });
    \u0275\u0275elementStart(1, "button", 71);
    \u0275\u0275listener("click", function FilmsPageComponent_Conditional_151_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVideo());
    });
    \u0275\u0275elementStart(2, "div", 72)(3, "span", 73);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 74);
    \u0275\u0275text(6, "Close (Esc)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75);
    \u0275\u0275listener("click", function FilmsPageComponent_Conditional_151_Template_div_click_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(8, "iframe", 76);
    \u0275\u0275elementStart(9, "div", 77);
    \u0275\u0275element(10, "div", 78);
    \u0275\u0275elementStart(11, "span", 79);
    \u0275\u0275text(12, "Cinematic Stream Active \u2022 4K");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r1.activeVideo(), \u0275\u0275sanitizeResourceUrl);
  }
}
var FilmsPageComponent = class _FilmsPageComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.activeVideo = signal(null, ...ngDevMode ? [{ debugName: "activeVideo" }] : []);
  }
  openVideo(url) {
    this.activeVideo.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
    document.body.style.overflow = "hidden";
  }
  closeVideo() {
    this.activeVideo.set(null);
    document.body.style.overflow = "";
  }
  static {
    this.\u0275fac = function FilmsPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilmsPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilmsPageComponent, selectors: [["app-films-page"]], hostBindings: function FilmsPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function FilmsPageComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeVideo();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 152, vars: 1, consts: [[1, "bg-[#040406]", "overflow-x-hidden", "min-h-screen"], [1, "relative", "h-screen", "w-full", "flex", "items-end", "pb-24", "px-6", "md:px-20", "overflow-hidden"], [1, "absolute", "inset-0", "z-0"], ["alt", "The Venetian Vow Hero", "src", "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", 1, "w-full", "h-full", "object-cover", "animate-scale-slow"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-[#040406]", "via-[#040406]/30", "to-transparent"], [1, "absolute", "inset-0", "bg-black/40"], [1, "relative", "z-10", "max-w-4xl", "reveal"], [1, "text-[#C6A96B]", "tracking-[0.5em]", "uppercase", "text-[10px]", "mb-6", "font-bold", "font-mono-tech"], [1, "text-6xl", "md:text-9xl", "font-serif-italic", "mb-12", "leading-[0.9]", "text-shadow-lg", "text-[#C6A96B]"], [1, "flex", "flex-wrap", "items-center", "gap-10"], [1, "group", "flex", "items-center", "gap-6", "border", "border-[#C6A96B]/50", "px-10", "py-5", "rounded-full", "hover:bg-[#C6A96B]", "hover:text-black", "transition-all", "duration-700", "active:scale-95", 3, "click"], [1, "material-symbols-outlined", "text-2xl", "group-hover:scale-110", "transition-transform"], [1, "uppercase", "tracking-[0.3em]", "text-[10px]", "font-bold", "font-mono-tech"], [1, "flex", "items-center", "gap-6", "text-[10px]", "tracking-[0.3em]", "uppercase", "opacity-60", "font-mono-tech"], [1, "w-1", "h-1", "bg-[#C6A96B]", "rounded-full"], [1, "absolute", "bottom-12", "right-10", "md:right-20", "hidden", "md:flex", "flex-col", "items-center", "gap-6"], [1, "text-[9px]", "uppercase", "tracking-[0.5em]", "opacity-40", "rotate-90", "origin-right", "translate-y-12", "font-mono-tech"], [1, "w-[1px]", "h-24", "bg-gradient-to-t", "from-[#C6A96B]", "to-transparent"], [1, "relative", "z-10", "px-6", "md:px-20", "py-32", "space-y-48"], [1, "reveal"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-end", "mb-16", "border-b", "border-white/5", "pb-10"], [1, "text-4xl", "md:text-5xl", "font-serif-italic", "text-[#C6A96B]", "mb-4"], [1, "text-[10px]", "uppercase", "tracking-[0.4em]", "opacity-50", "font-mono-tech"], ["routerLink", "/archive/WEDDINGS", 1, "text-[10px]", "uppercase", "tracking-[0.3em]", "text-[#C6A96B]", "hover:text-white", "transition-colors", "font-bold", "border-b", "border-[#C6A96B]/30", "pb-1", "mt-8", "md:mt-0"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-10"], [1, "group", "relative", "overflow-hidden", "bg-[#040406]", "border", "border-white/5", "cursor-pointer", 3, "click"], [1, "aspect-[2.35/1]", "overflow-hidden"], ["src", "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop", "alt", "Lake Como Film", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-[1.5s]", "ease-out", "group-hover:scale-105"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/90", "via-black/20", "to-transparent", "opacity-60", "group-hover:opacity-100", "transition-opacity", "duration-700"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "group-hover:scale-110", "transition-transform", "duration-700"], [1, "w-16", "h-16", "rounded-full", "border", "border-[#C6A96B]/30", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-md", "opacity-0", "group-hover:opacity-100", "transition-all"], [1, "material-symbols-outlined", "text-[#C6A96B]", "text-4xl"], [1, "absolute", "inset-x-0", "bottom-0", "p-10", "translate-y-4", "group-hover:translate-y-0", "transition-all", "duration-700"], [1, "flex", "justify-between", "items-end"], [1, "text-[#C6A96B]", "text-[9px]", "tracking-[0.4em]", "uppercase", "mb-3", "block", "font-mono-tech"], [1, "text-3xl", "font-serif-italic"], [1, "text-sm", "text-gray-400", "mt-4", "font-light", "max-w-sm", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-1000"], [1, "text-[9px]", "tracking-[0.3em]", "opacity-40", "font-mono-tech"], ["src", "https://images.unsplash.com/photo-1512453979798-5ea4e73ad94d?q=80&w=2070&auto=format&fit=crop", "alt", "Dubai Film", 1, "w-full", "h-full", "object-cover", "transition-transform", "duration-[1.5s]", "ease-out", "group-hover:scale-105"], ["href", "#", 1, "text-[10px]", "uppercase", "tracking-[0.3em]", "text-[#C6A96B]", "hover:text-white", "transition-colors", "font-bold", "border-b", "border-[#C6A96B]/30", "pb-1", "mt-8", "md:mt-0"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "group", "relative", "overflow-hidden", "border", "border-white/5", "cursor-pointer", 3, "click"], [1, "aspect-[9/16]", "overflow-hidden"], ["src", "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop", 1, "w-full", "h-full", "object-cover", "grayscale", "brightness-50", "group-hover:grayscale-0", "group-hover:brightness-100", "transition-all", "duration-1000"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-[#040406]", "to-transparent", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-700", "p-8", "flex", "flex-col", "justify-end"], [1, "text-2xl", "font-serif-italic"], [1, "text-[9px]", "uppercase", "tracking-[0.4em]", "text-[#C6A96B]", "mt-4", "font-mono-tech"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-[#C6A96B]", "text-4xl", "opacity-40", "group-hover:opacity-100", "transition-all", "group-hover:scale-125"], [1, "group", "relative", "overflow-hidden", "border", "border-white/5", "cursor-pointer", "md:mt-16", 3, "click"], ["src", "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop", 1, "w-full", "h-full", "object-cover", "grayscale", "brightness-50", "group-hover:grayscale-0", "group-hover:brightness-100", "transition-all", "duration-1000"], ["src", "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2070&auto=format&fit=crop", 1, "w-full", "h-full", "object-cover", "grayscale", "brightness-50", "group-hover:grayscale-0", "group-hover:brightness-100", "transition-all", "duration-1000"], [1, "group", "relative", "overflow-hidden", "rounded-2xl", "cursor-pointer", "border", "border-white/5", "bg-[#040406]", 3, "click"], [1, "aspect-[21/9]", "overflow-hidden"], ["src", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop", "alt", "Aura Watches Commercial", 1, "w-full", "h-full", "object-cover", "grayscale", "brightness-50", "group-hover:grayscale-0", "group-hover:brightness-100", "transition-all", "duration-[2s]", "ease-out"], [1, "absolute", "inset-0", "bg-black/40", "group-hover:bg-black/10", "transition-colors", "duration-1000"], [1, "absolute", "inset-0", "flex", "flex-col", "justify-center", "items-center", "text-center", "p-10"], [1, "text-[#C6A96B]", "tracking-[0.5em]", "uppercase", "text-[10px]", "mb-6", "font-mono-tech"], [1, "text-4xl", "md:text-7xl", "font-serif-italic", "mb-8"], [1, "h-[1px]", "w-32", "bg-[#C6A96B]", "scale-x-0", "group-hover:scale-x-100", "transition-transform", "duration-1000"], [1, "max-w-xl", "mt-8", "text-gray-400", "font-light", "opacity-0", "group-hover:opacity-100", "transition-all", "duration-1000", "transform", "translate-y-4", "group-hover:translate-y-0"], [1, "absolute", "top-10", "right-10"], [1, "w-12", "h-12", "rounded-full", "border", "border-white/20", "flex", "items-center", "justify-center", "group-hover:border-[#C6A96B]", "transition-colors"], [1, "material-symbols-outlined", "text-white", "group-hover:text-[#C6A96B]", "transition-colors"], [1, "py-24", "text-center", "reveal"], [1, "text-5xl", "md:text-7xl", "font-serif-italic", "text-[#C6A96B]", "mb-12"], [1, "max-w-2xl", "mx-auto", "text-[10px]", "opacity-40", "tracking-[0.5em]", "uppercase", "mb-16", "font-mono-tech", "font-bold"], ["routerLink", "/connect", 1, "group", "relative", "px-16", "py-7", "bg-[#C6A96B]", "text-black", "text-[11px]", "font-bold", "uppercase", "tracking-[0.4em]", "font-mono-tech", "hover:bg-white", "transition-all", "duration-700", "active:scale-95"], [1, "material-symbols-outlined", "ml-4", "align-middle", "text-sm", "group-hover:translate-x-2", "transition-transform"], [1, "fixed", "inset-0", "z-[2000]", "flex", "items-center", "justify-center", "bg-[#040406]/90", "backdrop-blur-xl", "animate-fade-in"], [1, "fixed", "inset-0", "z-[2000]", "flex", "items-center", "justify-center", "bg-[#040406]/90", "backdrop-blur-xl", "animate-fade-in", 3, "click"], ["aria-label", "Close video player", 1, "absolute", "top-6", "right-6", "md:top-10", "md:right-10", "flex", "flex-col", "items-center", "gap-2", "group", "z-[2100]", 3, "click"], [1, "w-14", "h-14", "rounded-full", "bg-white/5", "border", "border-white/10", "flex", "items-center", "justify-center", "group-hover:bg-white/10", "group-hover:border-[#C6A96B]/50", "transition-all", "duration-500"], [1, "material-symbols-outlined", "text-white", "group-hover:text-[#C6A96B]", "text-3xl"], [1, "text-[8px]", "font-mono-tech", "uppercase", "tracking-[0.3em]", "text-white/40", "group-hover:text-white", "transition-colors"], [1, "relative", "w-[92%]", "max-w-6xl", "aspect-video", "bg-black", "shadow-[0_40px_100px_-20px_rgba(0,0,0,1),0_0_80px_rgba(198,169,107,0.05)]", "animate-lightbox", 3, "click"], ["allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", "", 1, "w-full", "h-full", "border-none", 3, "src"], [1, "absolute", "-bottom-8", "left-0", "flex", "items-center", "gap-3"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-[#C6A96B]", "animate-pulse"], [1, "text-[9px]", "font-mono-tech", "uppercase", "tracking-[0.3em]", "text-white/50"]], template: function FilmsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "p", 7);
        \u0275\u0275text(8, "Featured Narrative");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 8);
        \u0275\u0275text(10, "The Venetian Vow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_button_click_12_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(13, "span", 11);
        \u0275\u0275text(14, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 12);
        \u0275\u0275text(16, "Watch Film");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "span");
        \u0275\u0275text(19, "Venice, Italy");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "span", 14);
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "4K Cinema");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 15)(24, "span", 16);
        \u0275\u0275text(25, "Scroll");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "div", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "main", 18)(28, "section", 19)(29, "div", 20)(30, "div")(31, "h2", 21);
        \u0275\u0275text(32, "Wedding Narratives");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 22);
        \u0275\u0275text(34, "High-end destination cinematography");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 23);
        \u0275\u0275text(36, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_38_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(39, "div", 26);
        \u0275\u0275element(40, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "div", 28);
        \u0275\u0275elementStart(42, "div", 29)(43, "div", 30)(44, "span", 31);
        \u0275\u0275text(45, "play_arrow");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 32)(47, "div", 33)(48, "div")(49, "span", 34);
        \u0275\u0275text(50, "Lake Como, Italy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h3", 35);
        \u0275\u0275text(52, "Ethereal Elegance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 36);
        \u0275\u0275text(54, "A poetic journey through the misty mornings and golden sunsets of the Italian lakes.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "span", 37);
        \u0275\u0275text(56, "04:22");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 25);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_57_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(58, "div", 26);
        \u0275\u0275element(59, "img", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "div", 28);
        \u0275\u0275elementStart(61, "div", 29)(62, "div", 30)(63, "span", 31);
        \u0275\u0275text(64, "play_arrow");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 32)(66, "div", 33)(67, "div")(68, "span", 34);
        \u0275\u0275text(69, "Dubai, UAE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "h3", 35);
        \u0275\u0275text(71, "Desert Mirage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 36);
        \u0275\u0275text(73, "A grand celebration of love amidst the architectural wonders of the desert city.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "span", 37);
        \u0275\u0275text(75, "05:45");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(76, "section", 19)(77, "div", 20)(78, "div")(79, "h2", 21);
        \u0275\u0275text(80, "Moodfilms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 22);
        \u0275\u0275text(82, "Fashion & Aesthetic Visuals");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "a", 39);
        \u0275\u0275text(84, "Explore Reels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 40)(86, "div", 41);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_86_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(87, "div", 42);
        \u0275\u0275element(88, "img", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 44)(90, "h3", 45);
        \u0275\u0275text(91, "Noir Soul");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 46);
        \u0275\u0275text(93, "Editorial Mood");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 47)(95, "span", 48);
        \u0275\u0275text(96, "play_circle");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 49);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_97_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(98, "div", 42);
        \u0275\u0275element(99, "img", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 44)(101, "h3", 45);
        \u0275\u0275text(102, "Golden Hour");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p", 46);
        \u0275\u0275text(104, "Vogue Feature");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 47)(106, "span", 48);
        \u0275\u0275text(107, "play_circle");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "div", 41);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_108_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(109, "div", 42);
        \u0275\u0275element(110, "img", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 44)(112, "h3", 45);
        \u0275\u0275text(113, "Urban Echo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 46);
        \u0275\u0275text(115, "Street Avant-Garde");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 47)(117, "span", 48);
        \u0275\u0275text(118, "play_circle");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(119, "section", 19)(120, "div", 20)(121, "div")(122, "h2", 21);
        \u0275\u0275text(123, "Commercial Stories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "p", 22);
        \u0275\u0275text(125, "Brand Narratives & Commercials");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 52);
        \u0275\u0275listener("click", function FilmsPageComponent_Template_div_click_126_listener() {
          return ctx.openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
        });
        \u0275\u0275elementStart(127, "div", 53);
        \u0275\u0275element(128, "img", 54);
        \u0275\u0275elementEnd();
        \u0275\u0275element(129, "div", 55);
        \u0275\u0275elementStart(130, "div", 56)(131, "span", 57);
        \u0275\u0275text(132, "Aura Watches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "h3", 58);
        \u0275\u0275text(134, "The Passage of Time");
        \u0275\u0275elementEnd();
        \u0275\u0275element(135, "div", 59);
        \u0275\u0275elementStart(136, "p", 60);
        \u0275\u0275text(137, " Global campaign showcasing the precision and legacy of Aura's Heritage collection. A visual symphony of mechanics and motion. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "div", 61)(139, "div", 62)(140, "span", 63);
        \u0275\u0275text(141, "play_arrow");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(142, "section", 64)(143, "h2", 65);
        \u0275\u0275text(144, "Let's craft your narrative.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p", 66);
        \u0275\u0275text(146, "Now accepting bookings for 2025 worldwide.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "button", 67);
        \u0275\u0275text(148, " Inquire Now ");
        \u0275\u0275elementStart(149, "span", 68);
        \u0275\u0275text(150, "arrow_right_alt");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(151, FilmsPageComponent_Conditional_151_Template, 13, 1, "div", 69);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(151);
        \u0275\u0275conditional(ctx.activeVideo() ? 151 : -1);
      }
    }, dependencies: [RouterLink], styles: ["\n\n.text-shadow-lg[_ngcontent-%COMP%] {\n  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);\n}\n@keyframes _ngcontent-%COMP%_scaleSlow {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}\n.animate-scale-slow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scaleSlow 20s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_lightboxIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.animate-lightbox[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lightboxIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=films-page.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilmsPageComponent, [{
    type: Component,
    args: [{ selector: "app-films-page", imports: [RouterLink], template: `
    <article class="bg-[#040406] overflow-x-hidden min-h-screen">
      <!-- Cinematic Hero -->
      <section class="relative h-screen w-full flex items-end pb-24 px-6 md:px-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img 
            alt="The Venetian Vow Hero" 
            class="w-full h-full object-cover animate-scale-slow" 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/30 to-transparent"></div>
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div class="relative z-10 max-w-4xl reveal">
          <p class="text-[#C6A96B] tracking-[0.5em] uppercase text-[10px] mb-6 font-bold font-mono-tech">Featured Narrative</p>
          <h1 class="text-6xl md:text-9xl font-serif-italic mb-12 leading-[0.9] text-shadow-lg text-[#C6A96B]">The Venetian Vow</h1>
          
          <div class="flex flex-wrap items-center gap-10">
            <button 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group flex items-center gap-6 border border-[#C6A96B]/50 px-10 py-5 rounded-full hover:bg-[#C6A96B] hover:text-black transition-all duration-700 active:scale-95"
            >
              <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">play_arrow</span>
              <span class="uppercase tracking-[0.3em] text-[10px] font-bold font-mono-tech">Watch Film</span>
            </button>
            <div class="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase opacity-60 font-mono-tech">
              <span>Venice, Italy</span>
              <span class="w-1 h-1 bg-[#C6A96B] rounded-full"></span>
              <span>4K Cinema</span>
            </div>
          </div>
        </div>

        <div class="absolute bottom-12 right-10 md:right-20 hidden md:flex flex-col items-center gap-6">
          <span class="text-[9px] uppercase tracking-[0.5em] opacity-40 rotate-90 origin-right translate-y-12 font-mono-tech">Scroll</span>
          <div class="w-[1px] h-24 bg-gradient-to-t from-[#C6A96B] to-transparent"></div>
        </div>
      </section>

      <main class="relative z-10 px-6 md:px-20 py-32 space-y-48">
        
        <!-- Wedding Narratives -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Wedding Narratives</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">High-end destination cinematography</p>
            </div>
            <a routerLink="/archive/WEDDINGS" class="text-[10px] uppercase tracking-[0.3em] text-[#C6A96B] hover:text-white transition-colors font-bold border-b border-[#C6A96B]/30 pb-1 mt-8 md:mt-0">View All</a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Film Card 1 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden bg-[#040406] border border-white/5 cursor-pointer"
            >
              <div class="aspect-[2.35/1] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lake Como Film" 
                  class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <div class="w-16 h-16 rounded-full border border-[#C6A96B]/30 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all">
                  <span class="material-symbols-outlined text-[#C6A96B] text-4xl">play_arrow</span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[#C6A96B] text-[9px] tracking-[0.4em] uppercase mb-3 block font-mono-tech">Lake Como, Italy</span>
                    <h3 class="text-3xl font-serif-italic">Ethereal Elegance</h3>
                    <p class="text-sm text-gray-400 mt-4 font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000">A poetic journey through the misty mornings and golden sunsets of the Italian lakes.</p>
                  </div>
                  <span class="text-[9px] tracking-[0.3em] opacity-40 font-mono-tech">04:22</span>
                </div>
              </div>
            </div>

            <!-- Film Card 2 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden bg-[#040406] border border-white/5 cursor-pointer"
            >
              <div class="aspect-[2.35/1] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea4e73ad94d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dubai Film" 
                  class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <div class="w-16 h-16 rounded-full border border-[#C6A96B]/30 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all">
                  <span class="material-symbols-outlined text-[#C6A96B] text-4xl">play_arrow</span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[#C6A96B] text-[9px] tracking-[0.4em] uppercase mb-3 block font-mono-tech">Dubai, UAE</span>
                    <h3 class="text-3xl font-serif-italic">Desert Mirage</h3>
                    <p class="text-sm text-gray-400 mt-4 font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000">A grand celebration of love amidst the architectural wonders of the desert city.</p>
                  </div>
                  <span class="text-[9px] tracking-[0.3em] opacity-40 font-mono-tech">05:45</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Moodfilms -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Moodfilms</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">Fashion & Aesthetic Visuals</p>
            </div>
            <a href="#" class="text-[10px] uppercase tracking-[0.3em] text-[#C6A96B] hover:text-white transition-colors font-bold border-b border-[#C6A96B]/30 pb-1 mt-8 md:mt-0">Explore Reels</a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Vertical Reel 1 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Noir Soul</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Editorial Mood</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>

            <!-- Vertical Reel 2 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer md:mt-16"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Golden Hour</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Vogue Feature</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>

            <!-- Vertical Reel 3 -->
            <div 
              (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
              class="group relative overflow-hidden border border-white/5 cursor-pointer"
            >
              <div class="aspect-[9/16] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2070&auto=format&fit=crop" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                >
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#040406] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                <h3 class="text-2xl font-serif-italic">Urban Echo</h3>
                <p class="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B] mt-4 font-mono-tech">Street Avant-Garde</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#C6A96B] text-4xl opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125">play_circle</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Commercial Stories -->
        <section class="reveal">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif-italic text-[#C6A96B] mb-4">Commercial Stories</h2>
              <p class="text-[10px] uppercase tracking-[0.4em] opacity-50 font-mono-tech">Brand Narratives & Commercials</p>
            </div>
          </div>

          <div 
            (click)="openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')"
            class="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 bg-[#040406]"
          >
            <div class="aspect-[21/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop" 
                alt="Aura Watches Commercial" 
                class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-out"
              >
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-10">
              <span class="text-[#C6A96B] tracking-[0.5em] uppercase text-[10px] mb-6 font-mono-tech">Aura Watches</span>
              <h3 class="text-4xl md:text-7xl font-serif-italic mb-8">The Passage of Time</h3>
              <div class="h-[1px] w-32 bg-[#C6A96B] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
              <p class="max-w-xl mt-8 text-gray-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-4 group-hover:translate-y-0">
                Global campaign showcasing the precision and legacy of Aura's Heritage collection. A visual symphony of mechanics and motion.
              </p>
            </div>
            <!-- Play Indicator -->
             <div class="absolute top-10 right-10">
               <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C6A96B] transition-colors">
                 <span class="material-symbols-outlined text-white group-hover:text-[#C6A96B] transition-colors">play_arrow</span>
               </div>
             </div>
          </div>
        </section>

        <!-- Final CTA -->
        <section class="py-24 text-center reveal">
          <h2 class="text-5xl md:text-7xl font-serif-italic text-[#C6A96B] mb-12">Let's craft your narrative.</h2>
          <p class="max-w-2xl mx-auto text-[10px] opacity-40 tracking-[0.5em] uppercase mb-16 font-mono-tech font-bold">Now accepting bookings for 2025 worldwide.</p>
          <button routerLink="/connect" class="group relative px-16 py-7 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.4em] font-mono-tech hover:bg-white transition-all duration-700 active:scale-95">
            Inquire Now
            <span class="material-symbols-outlined ml-4 align-middle text-sm group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </button>
        </section>

      </main>

      <!-- Video Modal Overlay (Refined) -->
      @if (activeVideo()) {
        <div 
          class="fixed inset-0 z-[2000] flex items-center justify-center bg-[#040406]/90 backdrop-blur-xl animate-fade-in"
          (click)="closeVideo()"
        >
          <!-- Enhanced Close Button -->
          <button 
            (click)="closeVideo()"
            class="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-center gap-2 group z-[2100]"
            aria-label="Close video player"
          >
            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#C6A96B]/50 transition-all duration-500">
              <span class="material-symbols-outlined text-white group-hover:text-[#C6A96B] text-3xl">close</span>
            </div>
            <span class="text-[8px] font-mono-tech uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Close (Esc)</span>
          </button>

          <!-- Video Container (Refined) -->
          <div 
            class="relative w-[92%] max-w-6xl aspect-video bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,1),0_0_80px_rgba(198,169,107,0.05)] animate-lightbox"
            (click)="$event.stopPropagation()"
          >
            <iframe 
              [src]="activeVideo()" 
              class="w-full h-full border-none"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen
            ></iframe>

            <!-- Status Indicator -->
            <div class="absolute -bottom-8 left-0 flex items-center gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-[#C6A96B] animate-pulse"></div>
              <span class="text-[9px] font-mono-tech uppercase tracking-[0.3em] text-white/50">Cinematic Stream Active \u2022 4K</span>
            </div>
          </div>
        </div>
      }
    </article>
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:keydown.escape)": "closeVideo()"
    }, styles: ["/* angular:styles/component:css;6b416af2c5a3f3f2977b49cb1e7ece862f73de5466f34fde3eb15ff1ad24972f;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/films-page.component.ts */\n.text-shadow-lg {\n  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);\n}\n@keyframes scaleSlow {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}\n.animate-scale-slow {\n  animation: scaleSlow 20s ease-out forwards;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fadeIn 0.4s ease-out forwards;\n}\n@keyframes lightboxIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.animate-lightbox {\n  animation: lightboxIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n/*# sourceMappingURL=films-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilmsPageComponent, { className: "FilmsPageComponent", filePath: "src/components/films-page.component.ts", lineNumber: 318 });
})();
export {
  FilmsPageComponent
};
//# sourceMappingURL=chunk-APPHNKL2.js.map
