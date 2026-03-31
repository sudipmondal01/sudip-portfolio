
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule],
  template: `
    <article class="pt-32 lg:pt-48 pb-20 overflow-x-hidden min-h-screen">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <!-- Header -->
        <div class="mb-24 reveal text-center lg:text-left">
          <h1 class="text-6xl lg:text-8xl font-medium mb-6 tracking-tighter leading-tight">
            Let’s <span class="font-serif-italic text-[#C6A96B]">Compose</span> <br class="hidden lg:block"> Your Story
          </h1>
          <p class="text-gray-500 text-sm md:text-base font-light tracking-[0.1em] uppercase italic">
            Every story begins with a conversation.
          </p>
          <div class="h-px w-32 bg-[#C6A96B]/30 mx-auto lg:mx-0 mt-10"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <!-- Left: Direct Line & Info -->
          <div class="lg:col-span-5 space-y-16 reveal delay-1">
            <section>
              <h2 class="text-[10px] tracking-[0.6em] uppercase text-[#C6A96B] mb-12 font-bold font-mono-tech">Direct Line</h2>
              <div class="space-y-10">
                <div>
                  <p class="text-gray-500 text-[10px] mb-2 uppercase tracking-[0.3em] italic">Inquiries</p>
                  <a href="mailto:sudipxv@gmail.com" class="text-3xl md:text-4xl font-light hover:text-[#C6A96B] transition-all duration-500 underline underline-offset-8 decoration-white/5 hover:decoration-[#C6A96B]/40">
                    sudipxv@gmail.com
                  </a>
                </div>
                <div>
                  <p class="text-gray-500 text-[10px] mb-4 uppercase tracking-[0.3em] italic">Social Presence</p>
                  <div class="flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest">
                    <a href="https://www.instagram.com/bunnyxdneo/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#C6A96B] transition-colors border-b border-white/10 pb-1">Instagram</a>
                    <a href="https://vimeo.com/sudipmondal" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#C6A96B] transition-colors border-b border-white/10 pb-1">Vimeo Narrative</a>
                    <a href="https://www.behance.net/sudip_mondal/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#C6A96B] transition-colors border-b border-white/10 pb-1">Behance Portfolio</a>
                    <a href="#" class="text-white hover:text-[#C6A96B] transition-colors border-b border-white/10 pb-1">Vogue Portfolio</a>
                  </div>
                </div>
              </div>
            </section>

            <section class="p-10 border border-[#C6A96B]/20 bg-[#C6A96B]/5 relative overflow-hidden group">
              <!-- Decorative background element -->
              <div class="absolute -right-10 -bottom-10 opacity-5 transition-transform duration-1000 group-hover:scale-110">
                <span class="material-symbols-outlined text-[120px]">public</span>
              </div>
              
              <div class="flex items-center gap-4 mb-6 relative z-10">
                <span class="material-symbols-outlined text-[#C6A96B] text-lg">public</span>
                <h3 class="text-[10px] tracking-[0.4em] uppercase font-bold text-[#C6A96B] font-mono-tech">Destination Ready</h3>
              </div>
              <p class="text-gray-400 font-light leading-relaxed text-base relative z-10">
                Currently accepting commissions worldwide. Specializing in high-end destination weddings, editorial fashion, and private luxury events. My passport is current and my bags are always packed for the extraordinary.
              </p>
            </section>
          </div>

          <!-- Right: Inquiry Form -->
          <div class="lg:col-span-7 reveal delay-2">
            <div class="bg-white/[0.02] p-8 lg:p-14 border border-white/5 relative shadow-2xl shadow-black/20">
              
              <div class="flex items-center justify-between mb-16">
                <h2 class="text-[10px] tracking-[0.5em] uppercase text-[#C6A96B] font-bold font-mono-tech">A Quiet Invitation</h2>
                <div class="flex gap-3">
                  <span class="h-[2px] w-12 bg-[#C6A96B]"></span>
                  <span class="h-[2px] w-12 bg-white/10"></span>
                </div>
              </div>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-12">
                <!-- Personal Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="relative group">
                    <label class="block text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold transition-colors group-focus-within:text-[#C6A96B]">Your Name</label>
                    <input 
                      type="text" 
                      formControlName="fullName"
                      name="name"
                      placeholder="e.g. Elena Rossi"
                      class="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white placeholder:text-gray-700 focus:border-[#C6A96B] focus:ring-0 transition-all outline-none font-light text-base"
                      [class.border-red-500]="contactForm.get('fullName')?.invalid && contactForm.get('fullName')?.touched"
                    >
                  </div>
                  <div class="relative group">
                    <label class="block text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold transition-colors group-focus-within:text-[#C6A96B]">Email Address</label>
                    <input 
                      type="email" 
                      formControlName="email"
                      name="email"
                      placeholder="e.g. elena@vision.com"
                      class="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white placeholder:text-gray-700 focus:border-[#C6A96B] focus:ring-0 transition-all outline-none font-light text-base"
                      [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    >
                  </div>
                </div>

                <!-- Story Type -->
                <div class="relative group">
                  <label class="block text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold transition-colors group-focus-within:text-[#C6A96B]">What story would you like to create?</label>
                  <select 
                    formControlName="inquiryType"
                    name="subject"
                    class="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white focus:border-[#C6A96B] focus:ring-0 transition-all outline-none font-light appearance-none cursor-pointer text-base"
                    [class.border-red-500]="contactForm.get('inquiryType')?.invalid && contactForm.get('inquiryType')?.touched"
                  >
                    <option value="" disabled>Select the path of our collaboration</option>
                    <option value="destination_wedding" class="bg-[#040406]">Destination Wedding</option>
                    <option value="editorial_portrait" class="bg-[#040406]">Editorial Portrait</option>
                    <option value="brand_campaign" class="bg-[#040406]">Brand Campaign</option>
                    <option value="product_still_life" class="bg-[#040406]">Product & Still Life</option>
                    <option value="travel_lifestyle" class="bg-[#040406]">Travel & Lifestyle</option>
                    <option value="personal_branding" class="bg-[#040406]">Personal Branding</option>
                    <option value="creative_collaboration" class="bg-[#040406]">Creative Collaboration</option>
                    <option value="custom_story" class="bg-[#040406]">Custom Story Request</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-0 bottom-4 text-[#C6A96B]/40 pointer-events-none">expand_more</span>
                </div>

                <!-- The Moment -->
                <div class="relative group">
                  <label class="block text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold transition-colors group-focus-within:text-[#C6A96B]">Tell me a little about the moment you want to capture.</label>
                  <textarea 
                    formControlName="message"
                    name="message"
                    rows="4"
                    placeholder="In a few words, describe the feeling or the specific moment you're dreaming of..."
                    class="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white placeholder:text-gray-700 focus:border-[#C6A96B] focus:ring-0 transition-all outline-none font-light resize-none text-base"
                    [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  ></textarea>
                </div>

                <!-- Submit -->
                <div class="pt-6">
                  <button 
                    type="submit"
                    [disabled]="isSubmitting()"
                    class="group relative w-full lg:w-auto px-16 py-6 bg-[#C6A96B] text-black text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-700 hover:bg-white active:scale-95 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed shadow-xl shadow-[#C6A96B]/10 hover:shadow-white/10"
                  >
                    @if (isSubmitting()) {
                      <span class="flex items-center gap-3">
                        <span class="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                        Initiating...
                      </span>
                    } @else {
                      <span class="flex items-center gap-3">
                        Begin Our Story
                        <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                      </span>
                    }
                  </button>
                  
                  @if (formSuccess()) {
                    <p class="mt-8 text-[10px] text-[#C6A96B] uppercase tracking-[0.2em] font-bold animate-fade-in-up">
                      A beautiful start. I’ll review your vision and reach out personally.
                    </p>
                  }
                  @if (formError()) {
                    <p class="mt-8 text-[10px] text-red-500 uppercase tracking-[0.2em] font-bold animate-fade-in-up">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    input:focus, select:focus, textarea:focus {
      border-bottom-width: 1.5px;
      box-shadow: 0 4px 10px -4px rgba(198, 169, 107, 0.2);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  isSubmitting = signal(false);
  formSuccess = signal(false);
  formError = signal(false);

  // Explicitly type the injected FormBuilder to resolve 'unknown' type error in strict mode
  private fb: FormBuilder = inject(FormBuilder);
  private http: HttpClient = inject(HttpClient);

  contactForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    inquiryType: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.formError.set(false);
    
    try {
      await firstValueFrom(
        this.http.post('https://formspree.io/f/mkovqbjq', this.contactForm.value)
      );
      this.formSuccess.set(true);
      this.contactForm.reset({ inquiryType: '' });
      setTimeout(() => this.formSuccess.set(false), 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      this.formError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
