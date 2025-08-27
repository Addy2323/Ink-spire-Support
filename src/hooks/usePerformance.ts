import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  refreshRate: number;
  deviceType: 'mobile' | 'tablet' | 'desktop' | 'gaming';
  isHighRefreshRate: boolean;
  scrollBehavior: 'auto' | 'smooth';
  animationDuration: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    refreshRate: 60,
    deviceType: 'desktop',
    isHighRefreshRate: false,
    scrollBehavior: 'smooth',
    animationDuration: 300,
  });

  // Detect refresh rate
  const detectRefreshRate = useCallback(() => {
    return new Promise<number>((resolve) => {
      let start = performance.now();
      let frames = 0;
      
      const measureFrameRate = () => {
        frames++;
        const now = performance.now();
        
        if (now - start >= 1000) {
          resolve(Math.round(frames));
        } else {
          requestAnimationFrame(measureFrameRate);
        }
      };
      
      requestAnimationFrame(measureFrameRate);
    });
  }, []);

  // Detect device type
  const detectDeviceType = useCallback((): 'mobile' | 'tablet' | 'desktop' | 'gaming' => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    
    // Gaming laptop detection (high resolution + desktop)
    if (!isMobile && !isTablet && width >= 1920 && height >= 1080) {
      return 'gaming';
    }
    
    if (isMobile && width <= 768) return 'mobile';
    if (isTablet || (width > 768 && width <= 1024)) return 'tablet';
    return 'desktop';
  }, []);

  // Get optimized settings based on device and refresh rate
  const getOptimizedSettings = useCallback((refreshRate: number, deviceType: string) => {
    const isHighRefreshRate = refreshRate >= 90;
    
    let scrollBehavior: 'auto' | 'smooth' = 'smooth';
    let animationDuration = 300;
    
    if (deviceType === 'mobile' && refreshRate >= 120) {
      // 120Hz mobile optimization
      scrollBehavior = 'auto';
      animationDuration = 150;
    } else if (deviceType === 'gaming' && refreshRate >= 240) {
      // 240Hz gaming laptop optimization
      scrollBehavior = 'auto';
      animationDuration = 80;
    } else if (isHighRefreshRate) {
      // General high refresh rate optimization
      scrollBehavior = 'auto';
      animationDuration = 200;
    }
    
    return {
      isHighRefreshRate,
      scrollBehavior,
      animationDuration,
    };
  }, []);

  // Initialize performance metrics
  useEffect(() => {
    const initializeMetrics = async () => {
      try {
        const refreshRate = await detectRefreshRate();
        const deviceType = detectDeviceType();
        const optimizedSettings = getOptimizedSettings(refreshRate, deviceType);
        
        setMetrics({
          refreshRate,
          deviceType,
          ...optimizedSettings,
        });
        
        // Apply global CSS variables for dynamic styling
        document.documentElement.style.setProperty('--refresh-rate', refreshRate.toString());
        document.documentElement.style.setProperty('--animation-duration', `${optimizedSettings.animationDuration}ms`);
        document.documentElement.style.setProperty('--scroll-behavior', optimizedSettings.scrollBehavior);
        
      } catch (error) {
        console.warn('Performance detection failed, using defaults:', error);
      }
    };
    
    initializeMetrics();
  }, [detectRefreshRate, detectDeviceType, getOptimizedSettings]);

  // Smooth scroll to element with optimized behavior
  const smoothScrollTo = useCallback((element: HTMLElement | string, options?: ScrollIntoViewOptions) => {
    const target = typeof element === 'string' ? document.querySelector(element) : element;
    
    if (!target) return;
    
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: metrics.scrollBehavior,
      block: 'start',
      inline: 'nearest',
      ...options,
    };
    
    target.scrollIntoView(scrollOptions);
  }, [metrics.scrollBehavior]);

  // Optimized scroll event handler with RAF throttling
  const createOptimizedScrollHandler = useCallback((callback: (event: Event) => void) => {
    let ticking = false;
    
    return (event: Event) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback(event);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  // Apply hardware acceleration to element
  const applyHardwareAcceleration = useCallback((element: HTMLElement) => {
    element.style.transform = 'translate3d(0, 0, 0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.willChange = 'transform';
  }, []);

  // Get CSS class for device-specific optimizations
  const getPerformanceClass = useCallback(() => {
    const classes = ['performance-optimized'];
    
    if (metrics.isHighRefreshRate) classes.push('high-refresh-rate');
    if (metrics.deviceType === 'mobile') classes.push('mobile-optimized');
    if (metrics.deviceType === 'gaming') classes.push('gaming-optimized');
    if (metrics.refreshRate >= 240) classes.push('ultra-high-refresh');
    
    return classes.join(' ');
  }, [metrics]);

  return {
    metrics,
    smoothScrollTo,
    createOptimizedScrollHandler,
    applyHardwareAcceleration,
    getPerformanceClass,
  };
};
