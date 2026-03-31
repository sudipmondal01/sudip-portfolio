// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
      this.metrics.set(name, performance.now());
    }
  }

  measure(name: string, startMark?: string, endMark?: string): void {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        if (startMark && endMark) {
          performance.measure(name, startMark, endMark);
        } else if (startMark) {
          performance.measure(name, startMark);
        }
      } catch (e) {
        // Ignore performance API errors
      }
    }
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Web Vitals tracking
  trackWebVitals(): void {
    if (typeof window !== 'undefined') {
      // Track LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Track FID (First Input Delay)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              console.log('FID:', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Track CLS (Cumulative Layout Shift)
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('CLS:', clsValue);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // Performance API not fully supported
        }
      }
    }
  }
}

// Image optimization utilities
export class ImageOptimizer {
  static getOptimizedUrl(url: string, width: number = 800, quality: number = 80): string {
    // Cloudinary optimization
    if (url.includes('res.cloudinary.com')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}f_auto,q_${quality},w_${width},c_limit`;
    }

    // Unsplash optimization
    if (url.includes('images.unsplash.com')) {
      return url.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, `q=${quality}`) + '&fm=webp';
    }

    return url;
  }

  static preloadImage(src: string, priority: 'high' | 'low' = 'low'): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      if (priority === 'high') {
        img.fetchPriority = 'high';
      }
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }
}