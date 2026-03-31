import {
  RouterLink
} from "./chunk-GA6UZJ6P.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N32WVGY5.js";

// src/components/about-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AboutPageComponent_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 56);
    \u0275\u0275element(2, "img", 57);
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 59)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r1.src, \u0275\u0275sanitizeUrl)("alt", item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.meta, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.id_label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.film);
  }
}
var AboutPageComponent = class _AboutPageComponent {
  constructor() {
    this.btsItems = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1492691523567-61723c275df1?q=80&w=2070&auto=format&fit=crop",
        title: "Studio Setup",
        id_label: "IMG_4821_RAW",
        film: "KODAK 400TX",
        meta: "50mm \u2022 f/1.4"
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop",
        title: "Field Session",
        id_label: "IMG_5032_RAW",
        film: "TRI-X PAN",
        meta: "35mm \u2022 f/2.0"
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=2064&auto=format&fit=crop",
        title: "Editorial Macro",
        id_label: "IMG_0123_RAW",
        film: "FUJI NEOPAN",
        meta: "85mm \u2022 f/1.8"
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1452721226468-f9c41fbd7d3a?q=80&w=1928&auto=format&fit=crop",
        title: "BTS Gear",
        id_label: "IMG_9944_RAW",
        film: "HP5 PLUS",
        meta: "24mm \u2022 f/2.8"
      }
    ];
  }
  static {
    this.\u0275fac = function AboutPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutPageComponent, selectors: [["app-about-page"]], decls: 128, vars: 0, consts: [[1, "pt-32", "lg:pt-48", "pb-20", "overflow-x-hidden"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10", "mb-40"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-16", "lg:gap-32", "items-stretch", "min-h-[70vh]"], [1, "lg:col-span-5", "relative", "reveal", "flex"], [1, "relative", "w-full", "h-full", "min-h-[600px]", "lg:min-h-0", "bg-[#060608]", "border", "border-white/5", "overflow-hidden", "group", "shadow-2xl"], ["src", "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop", "alt", "Sudip Mondal", 1, "w-full", "h-full", "object-cover", "grayscale", "transition-transform", "duration-[15s]", "group-hover:scale-105", "group-hover:grayscale-0"], [1, "absolute", "top-8", "left-8", "z-20"], [1, "text-[9px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.5em]", "font-mono-tech", "block", "mb-1"], [1, "absolute", "bottom-10", "left-10", "right-10", "z-20", "flex", "justify-between", "items-end"], [1, "text-xl", "font-serif-italic", "text-white", "mb-1"], [1, "text-[9px]", "text-gray-500", "uppercase", "tracking-[0.3em]"], [1, "hidden", "md:block"], [1, "text-[40px]", "font-serif-italic", "text-[#C6A96B]/20", "select-none"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/80", "via-transparent", "to-black/40", "pointer-events-none"], [1, "absolute", "-top-6", "-left-6", "w-32", "h-32", "border-t", "border-l", "border-[#C6A96B]/20", "-z-10"], [1, "absolute", "-bottom-6", "-right-6", "w-32", "h-32", "border-b", "border-r", "border-[#C6A96B]/20", "-z-10"], [1, "lg:col-span-7", "flex", "flex-col", "justify-between", "py-2", "lg:h-full"], [1, "reveal", "delay-1"], [1, "flex", "items-center", "gap-4", "mb-6"], [1, "text-[10px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.5em]", "font-mono-tech"], [1, "h-px", "flex-1", "bg-white/5"], [1, "text-5xl", "md:text-7xl", "font-medium", "tracking-tighter", "mb-8", "leading-tight"], [1, "font-serif-italic", "text-[#C6A96B]"], [1, "text-gray-400", "text-lg", "font-light", "leading-relaxed", "max-w-xl"], [1, "reveal", "delay-2", "py-12", "lg:py-0", "border-y", "lg:border-none", "border-white/5", "my-12", "lg:my-0"], [1, "reveal", "delay-3"], [1, "py-32", "bg-[#060608]", "relative", "border-y", "border-white/5"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10", "text-center"], [1, "text-[10px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.6em]", "mb-4", "block", "font-mono-tech"], [1, "text-4xl", "md:text-5xl", "font-semibold", "tracking-tighter", "mb-20"], [1, "text-[#C6A96B]"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "group", "p-12", "bg-white/[0.02]", "border", "border-white/5", "hover:border-[#C6A96B]/30", "transition-all", "duration-700", "text-left", "relative", "overflow-hidden"], [1, "absolute", "top-6", "right-6", "opacity-5", "group-hover:opacity-10", "transition-opacity"], [1, "material-symbols-outlined", "text-6xl"], [1, "text-6xl", "font-bold", "text-white", "mb-6", "tracking-tighter", "group-hover:text-[#C6A96B]", "transition-colors"], [1, "text-xs", "font-bold", "uppercase", "tracking-[0.2em]", "text-white", "mb-4"], [1, "text-gray-500", "text-sm", "font-light", "leading-relaxed"], [1, "py-40"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-end", "mb-16", "gap-6"], [1, "text-[10px]", "font-bold", "text-[#C6A96B]", "uppercase", "tracking-[0.5em]", "mb-4", "block", "font-mono-tech"], [1, "text-5xl", "md:text-6xl", "font-semibold", "tracking-tighter"], [1, "flex", "items-center", "gap-4", "text-gray-600"], [1, "text-[10px]", "uppercase", "tracking-widest", "font-mono-tech"], [1, "w-24", "h-px", "bg-white/10"], [1, "flex", "gap-8", "overflow-x-auto", "no-scrollbar", "pb-10", "snap-x"], [1, "flex-shrink-0", "w-[80vw]", "md:w-[450px]", "group", "snap-start"], [1, "py-40", "border-t", "border-white/5"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10", "text-center", "flex", "flex-col", "items-center"], [1, "text-6xl", "md:text-[140px]", "font-black", "leading-[0.9]", "tracking-tighter", "uppercase", "mb-12"], [1, "block"], [1, "block", "text-transparent", "stroke-text"], [1, "flex", "flex-wrap", "justify-center", "gap-8", "items-center", "mt-12"], ["routerLink", "/connect", 1, "px-16", "py-6", "bg-[#C6A96B]", "text-black", "text-[11px]", "font-bold", "uppercase", "tracking-[0.3em]", "hover:bg-white", "transition-all", "duration-500", "shadow-2xl", "shadow-[#C6A96B]/10", "active:scale-95"], ["routerLink", "/archive", 1, "px-16", "py-6", "border", "border-white/20", "text-white", "text-[11px]", "font-bold", "uppercase", "tracking-[0.3em]", "hover:bg-white", "hover:text-black", "hover:border-white", "transition-all", "duration-500", "active:scale-95"], [1, "aspect-square", "bg-white/5", "overflow-hidden", "mb-6", "relative", "grayscale", "hover:grayscale-0", "transition-all", "duration-700"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-[15s]", "group-hover:scale-110", 3, "src", "alt"], [1, "absolute", "bottom-4", "right-4", "text-[8px]", "font-mono-tech", "text-white/40", "tracking-widest", "uppercase"], [1, "flex", "justify-between", "items-center", "text-[9px]", "uppercase", "tracking-widest", "font-mono-tech", "text-gray-500", "group-hover:text-white", "transition-colors"]], template: function AboutPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8, "Artist Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8)(10, "div")(11, "h3", 9);
        \u0275\u0275text(12, "Sudip Mondal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 10);
        \u0275\u0275text(14, "Cinematographer & Curator");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
        \u0275\u0275text(17, "S. Mondal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(18, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 14)(20, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "span", 19);
        \u0275\u0275text(25, "01 / Genesis");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2", 21);
        \u0275\u0275text(28, " The first shutter ");
        \u0275\u0275element(29, "br");
        \u0275\u0275text(30, " clicked in ");
        \u0275\u0275elementStart(31, "span", 22);
        \u0275\u0275text(32, "2012.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p", 23);
        \u0275\u0275text(34, " It wasn't just about freezing time. It was about translating the unspoken vibration of a moment into a visual echo. My journey began with a borrowed camera and a relentless curiosity for light. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 24)(36, "div", 18)(37, "span", 19);
        \u0275\u0275text(38, "02 / Evolution");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h2", 21);
        \u0275\u0275text(41, " Chasing shadows ");
        \u0275\u0275element(42, "br");
        \u0275\u0275text(43, " across ");
        \u0275\u0275elementStart(44, "span", 22);
        \u0275\u0275text(45, "the world.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "p", 23);
        \u0275\u0275text(47, " From high-fashion runways to intimate coastal weddings, my lens has been a silent witness to raw human emotions. Every session is a collaborative discovery of truth. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 25)(49, "div", 18)(50, "span", 19);
        \u0275\u0275text(51, "03 / Signature");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h2", 21);
        \u0275\u0275text(54, " The art of ");
        \u0275\u0275element(55, "br");
        \u0275\u0275elementStart(56, "span", 22);
        \u0275\u0275text(57, "intentionality.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "p", 23);
        \u0275\u0275text(59, " I don't just take photos; I curate memories. My aesthetic is defined by cinematic contrast, editorial composition, and a deep respect for the subject's natural rhythm. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(60, "section", 26)(61, "div", 27)(62, "span", 28);
        \u0275\u0275text(63, "Proof of Craft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "h2", 29);
        \u0275\u0275text(65, "LEGACY IN ");
        \u0275\u0275elementStart(66, "span", 30);
        \u0275\u0275text(67, "NUMBERS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 31)(69, "div", 32)(70, "div", 33)(71, "span", 34);
        \u0275\u0275text(72, "favorite");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "h3", 35);
        \u0275\u0275text(74, "75+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h4", 36);
        \u0275\u0275text(76, "Weddings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 37);
        \u0275\u0275text(78, "Luxury celebrations captured across the globe with cinematic precision.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 32)(80, "div", 33)(81, "span", 34);
        \u0275\u0275text(82, "stadium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "h3", 35);
        \u0275\u0275text(84, "35+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "h4", 36);
        \u0275\u0275text(86, "Live Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 37);
        \u0275\u0275text(88, "High-energy concerts and corporate galas where timing is everything.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 32)(90, "div", 33)(91, "span", 34);
        \u0275\u0275text(92, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "h3", 35);
        \u0275\u0275text(94, "60+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h4", 36);
        \u0275\u0275text(96, "Model Sessions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 37);
        \u0275\u0275text(98, "Editorial and fashion shoots defined by bold geometry and light play.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(99, "section", 38)(100, "div", 39)(101, "div", 40)(102, "div")(103, "span", 41);
        \u0275\u0275text(104, "The Process");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "h2", 42);
        \u0275\u0275text(106, "BEHIND THE ");
        \u0275\u0275elementStart(107, "span", 30);
        \u0275\u0275text(108, "LENS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(109, "div", 43)(110, "span", 44);
        \u0275\u0275text(111, "Scroll to Explore");
        \u0275\u0275elementEnd();
        \u0275\u0275element(112, "div", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 46);
        \u0275\u0275repeaterCreate(114, AboutPageComponent_For_115_Template, 10, 5, "div", 47, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "section", 48)(117, "div", 49)(118, "h2", 50)(119, "span", 51);
        \u0275\u0275text(120, "Let's tell your");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span", 52);
        \u0275\u0275text(122, "story next.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 53)(124, "button", 54);
        \u0275\u0275text(125, " Start a Project ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "a", 55);
        \u0275\u0275text(127, " View Portfolio ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(114);
        \u0275\u0275repeater(ctx.btsItems);
      }
    }, dependencies: [RouterLink], styles: ["\n\n.stroke-text[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.2);\n}\n@media (min-width: 1024px) {\n  .stroke-text[_ngcontent-%COMP%] {\n    -webkit-text-stroke: 3px rgba(255, 255, 255, 0.2);\n  }\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=about-page.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutPageComponent, [{
    type: Component,
    args: [{ selector: "app-about-page", imports: [RouterLink], template: `
    <article class="pt-32 lg:pt-48 pb-20 overflow-x-hidden">
      
      <!-- Section 1: The Artist Hero (Height Balanced) -->
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-40">
        <!-- items-stretch ensures columns match height -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-stretch min-h-[70vh]">
          
          <!-- Column 1: Featured Portrait -->
          <div class="lg:col-span-5 relative reveal flex">
            <div class="relative w-full h-full min-h-[600px] lg:min-h-0 bg-[#060608] border border-white/5 overflow-hidden group shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
                    class="w-full h-full object-cover grayscale transition-transform duration-[15s] group-hover:scale-105 group-hover:grayscale-0" alt="Sudip Mondal">
               
               <!-- Top Overlay -->
               <div class="absolute top-8 left-8 z-20">
                 <span class="text-[9px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech block mb-1">Artist Profile</span>
               </div>

               <!-- Bottom Overlay / Signature -->
               <div class="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-end">
                 <div>
                    <h3 class="text-xl font-serif-italic text-white mb-1">Sudip Mondal</h3>
                    <p class="text-[9px] text-gray-500 uppercase tracking-[0.3em]">Cinematographer & Curator</p>
                 </div>
                 <div class="hidden md:block">
                    <span class="text-[40px] font-serif-italic text-[#C6A96B]/20 select-none">S. Mondal</span>
                 </div>
               </div>

               <!-- Gradient Scrims -->
               <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
            </div>
            
            <!-- Decorative Offset Frame -->
            <div class="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C6A96B]/20 -z-10"></div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#C6A96B]/20 -z-10"></div>
          </div>

          <!-- Column 2: Story Text Content (Perfectly Height-Aligned with flex-col justify-between) -->
          <div class="lg:col-span-7 flex flex-col justify-between py-2 lg:h-full">
            
            <!-- Genesis -->
            <div class="reveal delay-1">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">01 / Genesis</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                The first shutter <br> clicked in <span class="font-serif-italic text-[#C6A96B]">2012.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                It wasn't just about freezing time. It was about translating the unspoken vibration of a moment into a visual echo. My journey began with a borrowed camera and a relentless curiosity for light.
              </p>
            </div>

            <!-- Evolution -->
            <div class="reveal delay-2 py-12 lg:py-0 border-y lg:border-none border-white/5 my-12 lg:my-0">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">02 / Evolution</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                Chasing shadows <br> across <span class="font-serif-italic text-[#C6A96B]">the world.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                From high-fashion runways to intimate coastal weddings, my lens has been a silent witness to raw human emotions. Every session is a collaborative discovery of truth.
              </p>
            </div>

            <!-- Signature -->
            <div class="reveal delay-3">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] font-mono-tech">03 / Signature</span>
                <div class="h-px flex-1 bg-white/5"></div>
              </div>
              <h2 class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                The art of <br> <span class="font-serif-italic text-[#C6A96B]">intentionality.</span>
              </h2>
              <p class="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                I don't just take photos; I curate memories. My aesthetic is defined by cinematic contrast, editorial composition, and a deep respect for the subject's natural rhythm.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Section 2: Legacy in Numbers -->
      <section class="py-32 bg-[#060608] relative border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.6em] mb-4 block font-mono-tech">Proof of Craft</span>
          <h2 class="text-4xl md:text-5xl font-semibold tracking-tighter mb-20">LEGACY IN <span class="text-[#C6A96B]">NUMBERS</span></h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Stat 1 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">favorite</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">75+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Weddings</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">Luxury celebrations captured across the globe with cinematic precision.</p>
            </div>

            <!-- Stat 2 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">stadium</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">35+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Live Events</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">High-energy concerts and corporate galas where timing is everything.</p>
            </div>

            <!-- Stat 3 -->
            <div class="group p-12 bg-white/[0.02] border border-white/5 hover:border-[#C6A96B]/30 transition-all duration-700 text-left relative overflow-hidden">
               <div class="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span class="material-symbols-outlined text-6xl">person</span>
               </div>
               <h3 class="text-6xl font-bold text-white mb-6 tracking-tighter group-hover:text-[#C6A96B] transition-colors">60+</h3>
               <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Model Sessions</h4>
               <p class="text-gray-500 text-sm font-light leading-relaxed">Editorial and fashion shoots defined by bold geometry and light play.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Behind the Lens (Process) -->
      <section class="py-40">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span class="text-[10px] font-bold text-[#C6A96B] uppercase tracking-[0.5em] mb-4 block font-mono-tech">The Process</span>
              <h2 class="text-5xl md:text-6xl font-semibold tracking-tighter">BEHIND THE <span class="text-[#C6A96B]">LENS</span></h2>
            </div>
            <div class="flex items-center gap-4 text-gray-600">
               <span class="text-[10px] uppercase tracking-widest font-mono-tech">Scroll to Explore</span>
               <div class="w-24 h-px bg-white/10"></div>
            </div>
          </div>

          <!-- Horizontal BTS Gallery -->
          <div class="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x">
             @for (item of btsItems; track item.id) {
               <div class="flex-shrink-0 w-[80vw] md:w-[450px] group snap-start">
                  <div class="aspect-square bg-white/5 overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-700">
                    <img [src]="item.src" [alt]="item.title" class="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110">
                    <div class="absolute bottom-4 right-4 text-[8px] font-mono-tech text-white/40 tracking-widest uppercase">
                       {{ item.meta }}
                    </div>
                  </div>
                  <div class="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono-tech text-gray-500 group-hover:text-white transition-colors">
                    <span>{{ item.id_label }}</span>
                    <span>{{ item.film }}</span>
                  </div>
               </div>
             }
          </div>
        </div>
      </section>

      <!-- Section 4: Final CTA -->
      <section class="py-40 border-t border-white/5">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 text-center flex flex-col items-center">
           <h2 class="text-6xl md:text-[140px] font-black leading-[0.9] tracking-tighter uppercase mb-12">
             <span class="block">Let's tell your</span>
             <span class="block text-transparent stroke-text">story next.</span>
           </h2>
           
           <div class="flex flex-wrap justify-center gap-8 items-center mt-12">
             <button routerLink="/connect" class="px-16 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-2xl shadow-[#C6A96B]/10 active:scale-95">
               Start a Project
             </button>
             <a routerLink="/archive" class="px-16 py-6 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all duration-500 active:scale-95">
               View Portfolio
             </a>
           </div>
        </div>
      </section>

    </article>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;1d9f52c60580d4ba0c6cc1e2c9885c8d4c03cccb77a40d5944ca3cc883464ace;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/about-page.component.ts */\n.stroke-text {\n  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.2);\n}\n@media (min-width: 1024px) {\n  .stroke-text {\n    -webkit-text-stroke: 3px rgba(255, 255, 255, 0.2);\n  }\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=about-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutPageComponent, { className: "AboutPageComponent", filePath: "src/components/about-page.component.ts", lineNumber: 203 });
})();
export {
  AboutPageComponent
};
//# sourceMappingURL=chunk-NFRLS4O7.js.map
