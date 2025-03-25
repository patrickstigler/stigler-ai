// Cookie consent management
const COOKIE_CONSENT_KEY = 'cookie_consent';
const COOKIE_CONSENT_EXPIRY_DAYS = 365;

class CookieConsent {
  constructor() {
    this.banner = document.getElementById('cookie-banner');
    this.acceptButton = document.getElementById('cookie-accept');
    this.rejectButton = document.getElementById('cookie-reject');
    this.privacyLink = document.getElementById('privacy-policy-link');
    
    this.init();
  }

  init() {
    // Check if user has already made a choice
    if (!this.getCookieConsent()) {
      this.showBanner();
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    this.acceptButton.addEventListener('click', () => this.acceptCookies());
    this.rejectButton.addEventListener('click', () => this.rejectCookies());
  }

  showBanner() {
    this.banner.classList.add('show');
  }

  hideBanner() {
    this.banner.classList.remove('show');
  }

  acceptCookies() {
    this.setCookieConsent(true);
    this.hideBanner();
    // Enable Google Analytics
    this.enableGoogleAnalytics();
  }

  rejectCookies() {
    this.setCookieConsent(false);
    this.hideBanner();
    // Disable Google Analytics
    this.disableGoogleAnalytics();
  }

  setCookieConsent(accepted) {
    const date = new Date();
    date.setTime(date.getTime() + (COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${COOKIE_CONSENT_KEY}=${accepted};${expires};path=/;SameSite=Strict`;
  }

  getCookieConsent() {
    const name = `${COOKIE_CONSENT_KEY}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length) === 'true';
      }
    }
    return null;
  }

  enableGoogleAnalytics() {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5V5NY3VXFY';
    script.async = true;
    document.head.appendChild(script);
    
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-5V5NY3VXFY', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure'
    });
  }

  disableGoogleAnalytics() {
    // Remove Google Analytics script if it exists
    const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
    if (gaScript) {
      gaScript.remove();
    }
    
    // Clear any existing Google Analytics cookies
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name] = cookie.split('=');
      if (name.trim().startsWith('_ga') || name.trim().startsWith('_gid')) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    }
  }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CookieConsent();
}); 