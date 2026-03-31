import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-BVW7B7VI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  isDevMode,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BAHET4XE.js";

// src/components/navbar.component.ts
function NavbarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "a", 17);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275text(3, "Archive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 18);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275text(5, "Films");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 19);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275text(7, "The Artist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 20);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275text(9, "Connect");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21)(11, "a", 22);
    \u0275\u0275text(12, "IG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 23);
    \u0275\u0275text(14, "VM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 24);
    \u0275\u0275text(16, "BE");
    \u0275\u0275elementEnd()()();
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.isScrolled = signal(false, ...ngDevMode ? [{ debugName: "isScrolled" }] : []);
    this.isMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "isMenuOpen" }] : []);
  }
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 26, vars: 14, consts: [[1, "fixed", "top-0", "left-0", "right-0", "z-[100]", "transition-all", "duration-700", "ease-out", "border-b", "border-white/0"], [1, "max-w-[1400px]", "mx-auto", "px-6", "lg:px-10", "h-20", "md:h-24", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["routerLink", "/", 1, "text-lg", "md:text-xl", "font-bold", "tracking-[0.3em]", "font-mono-tech", "hover:text-[#C6A96B]", "transition-all", "duration-500"], [1, "hidden", "xl:flex", "items-center", "gap-12"], ["routerLink", "/archive", "routerLinkActive", "text-[#C6A96B]", 1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-gray-400", "hover:text-white", "transition-all", "duration-300", "relative", "group"], [1, "absolute", "-bottom-2", "left-0", "w-0", "h-[1px]", "bg-[#C6A96B]", "group-hover:w-full", "transition-all", "duration-500", "ease-in-out"], ["routerLink", "/films", "routerLinkActive", "text-[#C6A96B]", 1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-gray-400", "hover:text-white", "transition-all", "duration-300", "relative", "group"], ["routerLink", "/artist", "routerLinkActive", "text-white", 1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-gray-400", "hover:text-white", "transition-all", "duration-300", "relative", "group"], ["routerLink", "/connect", "routerLinkActive", "text-white", 1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-gray-400", "hover:text-white", "transition-all", "duration-300", "relative", "group"], [1, "flex", "items-center", "gap-6"], [1, "hidden", "lg:block", "w-px", "h-6", "bg-white/10"], ["routerLink", "/connect", 1, "px-8", "py-3", "bg-transparent", "border", "border-[#C6A96B]/30", "text-[#C6A96B]", "text-[9px]", "font-bold", "uppercase", "tracking-[0.25em]", "hover:bg-[#C6A96B]", "hover:text-black", "transition-all", "duration-500", "active:scale-95"], [1, "xl:hidden", "text-white", "p-2", "flex", "items-center", "justify-center", "border", "border-white/10", "rounded-full", "w-12", "h-12", "z-[110]", 3, "click"], [1, "material-symbols-outlined", "scale-110", "transition-transform", "duration-500"], [1, "xl:hidden", "fixed", "inset-0", "bg-black/98", "backdrop-blur-3xl", "z-[100]", "flex", "flex-col", "items-center", "justify-center", "animate-menu-fade"], [1, "flex", "flex-col", "gap-12", "items-center"], ["routerLink", "/archive", 1, "text-3xl", "font-light", "uppercase", "tracking-[0.5em]", "text-gray-400", "hover:text-[#C6A96B]", "transition-all", "duration-700", "animate-stagger-in", 2, "--delay", "0.1s", 3, "click"], ["routerLink", "/films", 1, "text-3xl", "font-light", "uppercase", "tracking-[0.5em]", "text-gray-400", "hover:text-[#C6A96B]", "transition-all", "duration-700", "animate-stagger-in", 2, "--delay", "0.2s", 3, "click"], ["routerLink", "/artist", 1, "text-3xl", "font-light", "uppercase", "tracking-[0.5em]", "text-gray-400", "hover:text-[#C6A96B]", "transition-all", "duration-700", "animate-stagger-in", 2, "--delay", "0.3s", 3, "click"], ["routerLink", "/connect", 1, "text-3xl", "font-light", "uppercase", "tracking-[0.5em]", "text-[#C6A96B]", "transition-all", "duration-700", "animate-stagger-in", 2, "--delay", "0.4s", 3, "click"], [1, "mt-24", "pt-10", "border-t", "border-white/10", "w-64", "flex", "justify-between", "gap-4", "animate-menu-fade", "delay-500"], ["href", "https://www.instagram.com/bunnyxdneo/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-[10px]", "text-gray-500", "uppercase", "tracking-widest", "font-mono-tech", "hover:text-white", "transition-colors", "cursor-pointer"], ["href", "https://vimeo.com/sudipmondal", "target", "_blank", "rel", "noopener noreferrer", 1, "text-[10px]", "text-gray-500", "uppercase", "tracking-widest", "font-mono-tech", "hover:text-white", "transition-colors", "cursor-pointer"], ["href", "https://www.behance.net/sudip_mondal/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-[10px]", "text-gray-500", "uppercase", "tracking-widest", "font-mono-tech", "hover:text-white", "transition-colors", "cursor-pointer"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275text(4, " SUDIP MONDAL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
        \u0275\u0275text(7, " Archive ");
        \u0275\u0275element(8, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, " Films ");
        \u0275\u0275element(11, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275text(13, " The Artist ");
        \u0275\u0275element(14, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275text(16, " Connect ");
        \u0275\u0275element(17, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275element(19, "div", 11);
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275text(21, " Booking ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_22_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275elementStart(23, "span", 14);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, NavbarComponent_Conditional_25_Template, 17, 0, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("py-0", ctx.isScrolled())("bg-black/80", ctx.isScrolled())("backdrop-blur-2xl", ctx.isScrolled())("border-white/5", ctx.isScrolled())("py-4", !ctx.isScrolled());
        \u0275\u0275advance(23);
        \u0275\u0275classProp("rotate-90", ctx.isMenuOpen());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isMenuOpen() ? "close" : "menu");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isMenuOpen() ? 25 : -1);
      }
    }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n\n@keyframes _ngcontent-%COMP%_menuFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_staggerIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.animate-menu-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_menuFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-stagger-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_staggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  animation-delay: var(--delay);\n}\n/*# sourceMappingURL=navbar.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [RouterLink, RouterLinkActive], template: `
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "(window:scroll)": "onWindowScroll()"
    }, styles: ["/* angular:styles/component:css;81dd5349b7262961c4078e51e3c3ef9fb807ea6b839dac7c2e3ac1b351a16df5;C:/Users/Fytrips/Downloads/Portfolio Website/src/components/navbar.component.ts */\n@keyframes menuFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes staggerIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.animate-menu-fade {\n  animation: menuFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-stagger-in {\n  opacity: 0;\n  animation: staggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  animation-delay: var(--delay);\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/components/navbar.component.ts", lineNumber: 100 });
})();

// src/components/footer.component.ts
var _c0 = () => ["/archive", "WEDDINGS"];
var _c1 = () => ["/archive", "EVENTS"];
var _c2 = () => ["/archive", "MODELS"];
var _c3 = () => ["/archive", "PRODUCT"];
var _c4 = () => ["/archive", "TRAVEL"];
var FooterComponent = class _FooterComponent {
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 74, vars: 10, consts: [[1, "pt-32", "pb-16", "px-6", "lg:px-10", "max-w-[1400px]", "mx-auto"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-16", "border-t", "border-white/5", "pt-16"], [1, "md:col-span-4", "flex", "flex-col", "gap-8"], [1, "text-3xl", "font-bold", "tracking-[0.2em]", "mb-3"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.3em]", "text-gray-500", "font-mono-tech"], [1, "flex", "gap-4", "items-center"], ["href", "https://www.instagram.com/bunnyxdneo/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", 1, "w-10", "h-10", "rounded-full", "border", "border-white/10", "flex", "items-center", "justify-center", "text-gray-400", "hover:text-[#C6A96B]", "hover:border-[#C6A96B]", "transition-all"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["href", "https://vimeo.com/sudipmondal", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Vimeo", 1, "w-10", "h-10", "rounded-full", "border", "border-white/10", "flex", "items-center", "justify-center", "text-gray-400", "hover:text-[#C6A96B]", "hover:border-[#C6A96B]", "transition-all"], ["d", "M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.93 21 10.97 21c-1.214 0-2.246-1.119-3.093-3.359-.557-2.053-1.119-4.107-1.68-6.159-.624-2.201-1.289-3.312-1.996-3.312-.155 0-.698.326-1.626.976l-.986-1.251c.959-.838 1.912-1.666 2.859-2.485 1.289-1.088 2.261-1.666 2.914-1.731 1.54-.147 2.491.906 2.85 3.16.403 2.536.682 4.108.837 4.71.365 1.529.752 2.295 1.156 2.295.31 0 .84-.551 1.586-1.654.744-1.099 1.147-1.93 1.213-2.492.124-1.18-.328-1.769-1.353-1.769-.465 0-.942.105-1.442.316 1.056-3.456 3.079-5.116 6.075-4.981 2.231.101 3.298 1.516 3.197 4.246z"], ["href", "https://www.behance.net/sudip_mondal/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Behance", 1, "w-10", "h-10", "rounded-full", "border", "border-white/10", "flex", "items-center", "justify-center", "text-gray-400", "hover:text-[#C6A96B]", "hover:border-[#C6A96B]", "transition-all"], ["d", "M22 12.502c.002.312-.012.618-.046.918h-4.458c.066.953.535 1.542 1.408 1.542.493 0 .895-.213 1.201-.641h1.722c-.22.693-.653 1.233-1.3 1.62-.647.387-1.385.58-2.215.58-1.127 0-2.03-.362-2.709-1.085-.679-.723-1.018-1.701-1.018-2.934 0-1.25.334-2.23 1.002-2.938.669-.709 1.517-1.063 2.544-1.063.993 0 1.8.344 2.42 1.033.621.689.923 1.677.907 2.966zm-4.484-1.306h2.72c-.046-.723-.396-1.141-1.049-1.141-.652 0-1.053.33-1.671 1.141zm-10.232-2.319h3.765c.661 0 1.18.148 1.558.444.378.297.567.708.567 1.233 0 .427-.123.774-.369 1.042-.246.267-.585.451-1.018.552.54.093.955.304 1.246.634.29.33.436.756.436 1.278 0 .61-.22 1.084-.66 1.423-.44.339-1.048.508-1.824.508h-4.364v-8.114zm1.863 1.564v1.855h1.745c.787 0 1.18-.309 1.18-.927 0-.619-.393-.928-1.18-.928h-1.745zm0 3.42v1.564h1.964c.854 0 1.282-.361 1.282-1.084 0-.723-.428-1.084-1.282-1.084h-1.964zm1.905-6.908h3.333v.952h-3.333v-.952z"], [1, "md:col-span-8", "grid", "grid-cols-2", "sm:grid-cols-3", "gap-12"], [1, "flex", "flex-col", "gap-6"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-[0.2em]", "text-[#C6A96B]", "font-mono-tech"], [1, "flex", "flex-col", "gap-4"], ["routerLink", "/", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["routerLink", "/films", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["routerLink", "/archive", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["routerLink", "/artist", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["routerLink", "/connect", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], [1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide", 3, "routerLink"], [1, "flex", "flex-col", "gap-6", "sm:items-end", "sm:text-right"], [1, "flex", "flex-col", "gap-4", "mb-10"], ["href", "https://www.instagram.com/bunnyxdneo/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["href", "https://vimeo.com/sudipmondal", "target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], ["href", "https://www.behance.net/sudip_mondal/", "target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", "text-gray-500", "hover:text-white", "transition-colors", "tracking-wide"], [1, "text-[9px]", "font-bold", "uppercase", "tracking-[0.4em]", "text-gray-600", "leading-relaxed", "font-mono-tech"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
        \u0275\u0275text(5, "SUDIP MONDAL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Cinematic & Editorial Photography");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 7);
        \u0275\u0275element(14, "path", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "a", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 7);
        \u0275\u0275element(17, "path", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "h4", 15);
        \u0275\u0275text(21, "Navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "ul", 16)(23, "li")(24, "a", 17);
        \u0275\u0275text(25, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li")(27, "a", 18);
        \u0275\u0275text(28, "Films");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "li")(30, "a", 19);
        \u0275\u0275text(31, "Archive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "li")(33, "a", 20);
        \u0275\u0275text(34, "The Artist");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li")(36, "a", 21);
        \u0275\u0275text(37, "Connect");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 14)(39, "h4", 15);
        \u0275\u0275text(40, "Featured");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ul", 16)(42, "li")(43, "a", 22);
        \u0275\u0275text(44, "Weddings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li")(46, "a", 22);
        \u0275\u0275text(47, "Luxury Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "li")(49, "a", 22);
        \u0275\u0275text(50, "Editorial");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "li")(52, "a", 22);
        \u0275\u0275text(53, "Commercial");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "li")(55, "a", 22);
        \u0275\u0275text(56, "Lifestyle");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 23)(58, "h4", 15);
        \u0275\u0275text(59, "Connect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ul", 24)(61, "li")(62, "a", 25);
        \u0275\u0275text(63, "Instagram");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li")(65, "a", 26);
        \u0275\u0275text(66, "Vimeo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "li")(68, "a", 27);
        \u0275\u0275text(69, "Behance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 28);
        \u0275\u0275text(71, " \xA9 2024 SUDIP MONDAL.");
        \u0275\u0275element(72, "br");
        \u0275\u0275text(73, " DESIGNED WITH PRECISION. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(43);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c3));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c4));
      }
    }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "app-footer",
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
               \xA9 2024 SUDIP MONDAL.<br>
               DESIGNED WITH PRECISION.
             </div>
          </div>
        </div>

      </div>
    </footer>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/components/footer.component.ts", lineNumber: 79 });
})();

// src/utils/performance.ts
var PerformanceMonitor = class _PerformanceMonitor {
  constructor() {
    this.metrics = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!_PerformanceMonitor.instance) {
      _PerformanceMonitor.instance = new _PerformanceMonitor();
    }
    return _PerformanceMonitor.instance;
  }
  mark(name) {
    if (typeof performance !== "undefined" && performance.mark) {
      performance.mark(name);
      this.metrics.set(name, performance.now());
    }
  }
  measure(name, startMark, endMark) {
    if (typeof performance !== "undefined" && performance.measure) {
      try {
        if (startMark && endMark) {
          performance.measure(name, startMark, endMark);
        } else if (startMark) {
          performance.measure(name, startMark);
        }
      } catch (e) {
      }
    }
  }
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
  // Web Vitals tracking
  trackWebVitals() {
    if (typeof window !== "undefined") {
      if ("PerformanceObserver" in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log("LCP:", lastEntry.startTime);
          });
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log("FID:", entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ["first-input"] });
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log("CLS:", clsValue);
          });
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {
        }
      }
    }
  }
};

// src/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.router = inject(Router);
    this.cdr = inject(ChangeDetectorRef);
  }
  ngOnInit() {
    console.log("[AppComponent] Initializing...");
    const redirect = sessionStorage.redirect;
    if (redirect) {
      console.log("[AppComponent] Handling redirect:", redirect);
      delete sessionStorage.redirect;
      this.router.navigateByUrl(redirect);
    }
    this.cdr.markForCheck();
    if (isDevMode()) {
      console.log("[AppComponent] Development mode - initializing performance monitor");
      PerformanceMonitor.getInstance().trackWebVitals();
    }
    console.log("[AppComponent] Initialization complete");
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "relative", "bg-[#040406]", "min-h-screen", "selection:bg-[#C6A96B]", "selection:text-black"], [1, "relative", "z-10"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-navbar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-footer");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [
      NavbarComponent,
      RouterOutlet,
      FooterComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [
        NavbarComponent,
        RouterOutlet,
        FooterComponent
      ],
      template: `
    <div class="relative bg-[#040406] min-h-screen selection:bg-[#C6A96B] selection:text-black">
      <app-navbar />

      <main class="relative z-10">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 28 });
})();

// src/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-JZCCCNUW.js").then((m) => m.HomeComponent)
  },
  {
    path: "archive",
    loadComponent: () => import("./chunk-NWVNNOAM.js").then((m) => m.ArchiveComponent)
  },
  {
    path: "archive/:category",
    loadComponent: () => import("./chunk-NWVNNOAM.js").then((m) => m.ArchiveComponent)
  },
  {
    path: "films",
    loadComponent: () => import("./chunk-OTH3Z6ZI.js").then((m) => m.FilmsPageComponent)
  },
  {
    path: "artist",
    loadComponent: () => import("./chunk-RBPDVLOA.js").then((m) => m.AboutPageComponent)
  },
  {
    path: "connect",
    loadComponent: () => import("./chunk-4WUPITBK.js").then((m) => m.ContactPageComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/main.ts
console.log("[Angular Bootstrap] Starting application bootstrap...");
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err) => {
  console.error("[Angular Bootstrap] CRITICAL ERROR:", err);
  const appRoot = document.querySelector("app-root");
  if (appRoot) {
    appRoot.innerHTML = `<div style="color: red; padding: 20px; font-family: monospace;">
      <h1>Application Error</h1>
      <p>${err.message}</p>
      <p>${err.stack}</p>
    </div>`;
  }
});
//# sourceMappingURL=main.js.map
