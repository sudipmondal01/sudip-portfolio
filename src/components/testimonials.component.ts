
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  storyTitle: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  clientImg: string;
  projectImg: string;
}

@Component({
  selector: 'app-testimonials',
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
})
export class TestimonialsComponent {
  stories: Testimonial[] = [
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
