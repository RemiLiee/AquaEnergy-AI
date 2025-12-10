'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Update Google Analytics consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Vi bruker informasjonskapsler (cookies) for å forbedre opplevelsen din og analysere trafikken på nettsiden. 
            Ved å fortsette å bruke nettsiden, godtar du vår bruk av informasjonskapsler.{' '}
            <a href="/personvern" className="underline hover:text-gray-300">
              Les mer om personvern
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
          >
            Avvis
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-primary-600 rounded hover:bg-primary-700 transition-colors"
          >
            Godta
          </button>
        </div>
      </div>
    </div>
  );
}

